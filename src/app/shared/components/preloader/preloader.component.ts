import { Component, signal, OnInit, inject } from '@angular/core';
import { PROFILE } from '@core/constants/portfolio.constants';

@Component({
  selector: 'app-preloader',
  standalone: true,
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss'
})
export class PreloaderComponent implements OnInit {
  readonly visible = signal(true);
  readonly hiding = signal(false);
  readonly progress = signal(0);
  
  ngOnInit(): void {
    this.simulateLoading();
  }
  
  getInitials(): string {
    return PROFILE.name.split(' ').map(n => n[0]).slice(0, 2).join('');
  }
  
  private simulateLoading(): void {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 15;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          this.hiding.set(true);
          setTimeout(() => this.visible.set(false), 600);
        }, 300);
      }
      this.progress.set(Math.floor(current));
    }, 100);
  }
}