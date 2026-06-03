import { Component, input, ElementRef, viewChild, AfterViewInit, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-magnetic-button',
  standalone: true,
  templateUrl: './magnetic-button.component.html',
  styleUrl: './magnetic-button.component.scss'
})
export class MagneticButtonComponent implements AfterViewInit {
  readonly variant = input<'primary' | 'outline' | 'ghost'>('primary');
  readonly strength = input(0.3);
  
  private readonly btnRef = viewChild.required<ElementRef<HTMLButtonElement>>('btn');
  private readonly destroyRef = inject(DestroyRef);
  
  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;
    
    const btn = this.btnRef().nativeElement;
    const content = btn.querySelector('.btn-content') as HTMLElement;
    
    const mouseMove$ = fromEvent<MouseEvent>(btn, 'mousemove');
    const mouseLeave$ = fromEvent<MouseEvent>(btn, 'mouseleave');
    
    mouseMove$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const strength = this.strength();
      
      btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      content.style.transform = `translate(${x * strength * 0.5}px, ${y * strength * 0.5}px)`;
    });
    
    mouseLeave$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      btn.style.transform = 'translate(0, 0)';
      content.style.transform = 'translate(0, 0)';
    });
  }
}