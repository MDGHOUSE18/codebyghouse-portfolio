import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE, SOCIAL_LINKS } from '@core/constants/portfolio.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly PROFILE = PROFILE;
  readonly SOCIAL_LINKS = SOCIAL_LINKS;
  readonly currentYear = new Date().getFullYear();
}