import { Injectable, NgZone, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollService } from './scroll.service';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {
  private readonly zone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly scrollService = inject(ScrollService);

  private lenis?: Lenis;
  private tickerCb?: (time: number) => void;

  init(): void {
    if (!isPlatformBrowser(this.platformId) || this.lenis) return;

    const prefersReducedMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    if (prefersReducedMotion) {
      this.scrollService.enableNativeScroll();
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    this.scrollService.enableLenisScroll();

    this.zone.runOutsideAngular(() => {
      this.lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.2,
        syncTouch: true
      });

      this.lenis.on('scroll', ({ scroll, limit }: { scroll: number; limit: number }) => {
        this.scrollService.updateFromLenis(scroll, limit);
        ScrollTrigger.update();
      });

      this.tickerCb = (time: number) => {
        this.lenis?.raf(time * 1000);
      };
      gsap.ticker.add(this.tickerCb);

      const lenisRef = this.lenis;
      ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value) {
          if (arguments.length && value !== undefined) {
            lenisRef.scrollTo(value, { immediate: true });
          }
          return lenisRef.scroll;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        }
      });

      ScrollTrigger.defaults({ scroller: document.documentElement });
      ScrollTrigger.refresh();
    });
  }

  scrollTo(target: number | string | HTMLElement, offset = 0): void {
    const headerOffset = offset || parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--header-height') || '80',
      10
    );

    if (this.lenis) {
      this.lenis.scrollTo(target, { offset: -headerOffset, duration: 1.2 });
    } else if (isPlatformBrowser(this.platformId)) {
      const el =
        typeof target === 'string' ? document.querySelector(target) : target;
      if (typeof target === 'number') {
        window.scrollTo({ top: target - headerOffset, behavior: 'smooth' });
      } else if (el instanceof HTMLElement) {
        const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }

  scrollToTop(immediate = false): void {
    if (this.lenis) {
      this.lenis.scrollTo(0, { immediate });
    } else if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' });
    }
  }

  destroy(): void {
    if (this.tickerCb) gsap.ticker.remove(this.tickerCb);
    ScrollTrigger.getAll().forEach((t) => t.kill());
    this.lenis?.destroy();
    this.lenis = undefined;
    this.tickerCb = undefined;
  }
}
