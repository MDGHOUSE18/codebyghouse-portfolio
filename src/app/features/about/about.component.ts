import { Component, inject, OnInit } from '@angular/core';
import { PROFILE, EXPERIENCES, EDUCATION } from '@core/constants/portfolio.constants';
import { SectionHeaderComponent } from '@shared/components/section-header/section-header.component';
import { SeoService } from '@core/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  readonly PROFILE = PROFILE;
  readonly EXPERIENCES = EXPERIENCES;
  readonly EDUCATION = EDUCATION;

  private readonly seoService = inject(SeoService);

  aboutParagraphs = PROFILE.about.split('\n\n').filter(p => p.trim());

  ngOnInit(): void {
    this.seoService.updateTitle('About');
    this.seoService.updateMeta(
      `Learn more about ${PROFILE.name}, a ${PROFILE.title} based in ${PROFILE.location}.`,
      'About, Developer, Profile, Bio'
    );
  }
}