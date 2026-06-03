import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ScrollService } from '@core/services/scroll.service';
import { PROFILE } from '@core/constants/portfolio.constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly scrollService = inject(ScrollService);
  readonly mobileOpen = signal(false);
  readonly PROFILE = PROFILE;

  navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' }
  ];

  getInitials(): string {
    return 'G';
  }

  toggleMobile(): void {
    this.mobileOpen.update(v => !v);
  }
}