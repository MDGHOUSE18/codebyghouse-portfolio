import {
  Directive,
  ElementRef,
  inject,
  input,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  DestroyRef
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type RevealDirection = '' | 'up' | 'left' | 'right' | 'scale' | 'fade';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit {
  /** Reveal direction. Defaults to a subtle upward fade. */
  readonly appReveal = input<RevealDirection>('');
  /** Base delay before the reveal starts, in milliseconds. */
  readonly revealDelay = input(0);
  /**
   * When set, direct children are revealed one after another instead of the
   * host element. The value is the delay step between children in ms.
   */
  readonly revealStagger = input<number | null>(null);

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const host = this.el.nativeElement;
    const prefersReducedMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (prefersReducedMotion) return;

    const step = this.revealStagger();
    const useStagger = step !== null;
    const targets: HTMLElement[] = useStagger
      ? (Array.from(host.children) as HTMLElement[])
      : [host];

    const direction = this.appReveal();
    const directionClass =
      direction && direction !== 'up' ? `reveal--${direction}` : '';
    const stepMs = step ?? 0;

    targets.forEach((target, index) => {
      this.renderer.addClass(target, 'reveal');
      if (directionClass) this.renderer.addClass(target, directionClass);

      const delay = this.revealDelay() + (useStagger ? index * stepMs : 0);
      if (delay > 0) {
        this.renderer.setStyle(target, '--reveal-delay', `${delay}ms`);
      }
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            targets.forEach((target) =>
              this.renderer.addClass(target, 'is-visible')
            );
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(host);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
