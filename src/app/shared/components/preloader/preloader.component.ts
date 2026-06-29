import { Component, signal, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  standalone: true,
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss'
})
export class PreloaderComponent implements OnInit {
  readonly visible = signal(true);
  readonly hiding = signal(false);

  ngOnInit(): void {
    if (typeof window === 'undefined') {
      this.visible.set(false);
      return;
    }

    const finish = (): void => {
      this.hiding.set(true);
      setTimeout(() => this.visible.set(false), 300);
    };

    if (document.readyState === 'complete') {
      setTimeout(finish, 200);
    } else {
      window.addEventListener('load', () => setTimeout(finish, 200), { once: true });
    }
  }
}
