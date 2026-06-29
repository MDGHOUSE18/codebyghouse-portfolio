import { Component } from '@angular/core';
import {
  PROFILE,
  EXPERIENCES,
  SERVICES
} from '@core/constants/portfolio.constants';
import { RevealDirective } from '@shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly PROFILE = PROFILE;
  readonly EXPERIENCES = EXPERIENCES;
  readonly SERVICES = SERVICES;

  aboutParagraphs = PROFILE.about.split('\n\n').filter((p) => p.trim());

  getInitials(): string {
    return PROFILE.name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('');
  }
}
