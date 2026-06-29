import { Injectable, signal, inject, DestroyRef, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, animationFrameScheduler, observeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);

  readonly scrollY = signal(0);
  readonly scrollProgress = signal(0);
  readonly activeSection = signal('home');

  private lastScrollY = 0;
  private sectionObserver?: IntersectionObserver;
  private lenisMode = false;

  init(): void {
    if (typeof window === 'undefined') return;
  }

  enableNativeScroll(): void {
    if (typeof window === 'undefined' || this.lenisMode) return;

    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, 'scroll', { passive: true })
        .pipe(
          observeOn(animationFrameScheduler),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe(() => {
          this.applyScroll(window.scrollY);
        });
    });
  }

  enableLenisScroll(): void {
    this.lenisMode = true;
  }

  /** Call after landing sections are in the DOM (e.g. HomeComponent ngAfterViewInit). */
  observeSections(): void {
    if (typeof window === 'undefined') return;

    this.sectionObserver?.disconnect();
    const sections = this.document.querySelectorAll<HTMLElement>('[data-section]');
    if (!sections.length) return;

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section');
            if (id) {
              this.ngZone.run(() => this.activeSection.set(id));
            }
          }
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => this.sectionObserver?.observe(s));
    this.destroyRef.onDestroy(() => this.sectionObserver?.disconnect());
  }

  updateFromLenis(scroll: number, limit: number): void {
    this.ngZone.run(() => {
      const progress = limit > 0 ? (scroll / limit) * 100 : 0;
      this.lastScrollY = scroll;
      this.scrollY.set(scroll);
      this.scrollProgress.set(progress);
    });
  }

  private applyScroll(currentY: number): void {
    const maxScroll =
      this.document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (currentY / maxScroll) * 100 : 0;

    this.scrollY.set(currentY);
    this.scrollProgress.set(progress);
    this.lastScrollY = currentY;
  }
}
