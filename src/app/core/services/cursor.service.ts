import { Injectable, signal, inject, DestroyRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursorService {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  readonly x = signal(0);
  readonly y = signal(0);
  readonly isHovering = signal(false);
  readonly isClicking = signal(false);
  readonly cursorType = signal<'default' | 'pointer' | 'text' | 'action'>('default');
  readonly cursorText = signal('');

  private followerX = 0;
  private followerY = 0;
  private animationFrame: number | null = null;

  init(): void {
    if (typeof window === 'undefined' || window.matchMedia('(max-width: 768px)').matches) {
      return;
    }

    const mouseMove$ = fromEvent<MouseEvent>(this.document, 'mousemove');
    const mouseDown$ = fromEvent<MouseEvent>(this.document, 'mousedown');
    const mouseUp$ = fromEvent<MouseEvent>(this.document, 'mouseup');

    mouseMove$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((e) => {
      this.x.set(e.clientX);
      this.y.set(e.clientY);
    });

    mouseDown$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.isClicking.set(true);
    });

    mouseUp$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.isClicking.set(false);
    });

    this.setupHoverDetection();
    this.startFollowerAnimation();
  }

  private setupHoverDetection(): void {
    const interactiveElements = 'a, button, [data-cursor="pointer"], input, textarea, select';

    this.document.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveElements)) {
        this.isHovering.set(true);
        const cursorType = target.dataset['cursor'] as 'pointer' | 'text' | 'action' | undefined;
        this.cursorType.set(cursorType || 'pointer');

        const cursorText = target.dataset['cursorText'];
        if (cursorText) {
          this.cursorText.set(cursorText);
        }
      }
    });

    this.document.addEventListener('mouseout', (e) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveElements)) {
        this.isHovering.set(false);
        this.cursorType.set('default');
        this.cursorText.set('');
      }
    });
  }

  private startFollowerAnimation(): void {
    const animate = () => {
      this.followerX += (this.x() - this.followerX) * 0.15;
      this.followerY += (this.y() - this.followerY) * 0.15;
      this.animationFrame = requestAnimationFrame(animate);
    };
    animate();

    this.destroyRef.onDestroy(() => {
      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame);
      }
    });
  }

  getFollowerPosition(): { x: number; y: number } {
    return { x: this.followerX, y: this.followerY };
  }
}