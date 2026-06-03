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
  readonly isScrolling = signal(false);
  readonly scrollDirection = signal<'up' | 'down'>('down');
  
  private lastScrollY = 0;
  private scrollTimeout: any;
  
  init(): void {
    if (typeof window === 'undefined') return;
    
    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, 'scroll', { passive: true })
        .pipe(
          observeOn(animationFrameScheduler),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe(() => {
          this.updateScroll();
        });
    });
  }
  
  private updateScroll(): void {
    const currentY = window.scrollY;
    const maxScroll = this.document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (currentY / maxScroll) * 100 : 0;
    
    this.scrollY.set(currentY);
    this.scrollProgress.set(progress);
    this.scrollDirection.set(currentY > this.lastScrollY ? 'down' : 'up');
    this.isScrolling.set(true);
    this.lastScrollY = currentY;
    
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling.set(false);
    }, 150);
  }
  
  scrollTo(element: string | HTMLElement, offset: number = 0): void {
    const el = typeof element === 'string' 
      ? this.document.querySelector(element) 
      : element;
    
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
  
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}