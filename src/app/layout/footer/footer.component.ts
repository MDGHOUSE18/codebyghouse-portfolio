import { Component, inject } from '@angular/core';
import { PROFILE, SOCIAL_LINKS } from '@core/constants/portfolio.constants';
import { SmoothScrollService } from '@core/services/smooth-scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly PROFILE = PROFILE;
  readonly SOCIAL_LINKS = SOCIAL_LINKS;
  readonly currentYear = new Date().getFullYear();
  private readonly smoothScroll = inject(SmoothScrollService);

  readonly navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  scrollToSection(id: string, event: Event): void {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      history.replaceState(null, '', `#${id}`);
      this.smoothScroll.scrollTo(el);
    }
  }
}
