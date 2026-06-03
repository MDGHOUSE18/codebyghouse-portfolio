import { Component, input, effect, ElementRef, viewChild, OnInit, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-animated-counter',
  standalone: true,
  templateUrl: './animated-counter.component.html',
  styleUrl: './animated-counter.component.scss'
})
export class AnimatedCounterComponent implements OnInit {
  readonly target = input.required<number>();
  readonly duration = input(2000);
  readonly suffix = input('');
  readonly decimals = input(0);
  
  readonly displayValue = () => this.currentValue.toFixed(this.decimals());
  
  private currentValue = 0;
  private readonly counterRef = viewChild.required<ElementRef<HTMLSpanElement>>('counter');
  private readonly destroyRef = inject(DestroyRef);
  private hasAnimated = false;
  
  ngOnInit(): void {
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animate();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    
    observer.observe(this.counterRef().nativeElement);
    
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
  
  private animate(): void {
    const start = performance.now();
    const target = this.target();
    const duration = this.duration();
    
    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      this.currentValue = target * eased;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        this.currentValue = target;
      }
    };
    
    requestAnimationFrame(update);
  }
}