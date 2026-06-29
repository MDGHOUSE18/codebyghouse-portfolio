import { Component, inject, signal } from '@angular/core';
import { ScrollService } from '@core/services/scroll.service';
import { SmoothScrollService } from '@core/services/smooth-scroll.service';
import { ThemeService } from '@core/services/theme.service';
import { PROFILE } from '@core/constants/portfolio.constants';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly scrollService = inject(ScrollService);
  readonly themeService = inject(ThemeService);
  private readonly smoothScroll = inject(SmoothScrollService);

  readonly mobileOpen = signal(false);
  readonly PROFILE = PROFILE;

  readonly navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  isActive(id: string): boolean {
    return this.scrollService.activeSection() === id;
  }

  scrollToSection(id: string, event: Event): void {
    event.preventDefault();
    this.mobileOpen.set(false);
    this.scrollService.activeSection.set(id);

    const navigate = (): void => {
      const el = document.getElementById(id);
      if (!el) return;

      history.replaceState(null, '', `#${id}`);
      this.smoothScroll.scrollTo(el);
    };

    navigate();
    requestAnimationFrame(navigate);
  }

  toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
