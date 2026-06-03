import { Component, inject, OnInit } from '@angular/core';
import { EXPERIENCES, EDUCATION } from '../../core/constants/portfolio.constants';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  readonly EXPERIENCES = EXPERIENCES;
  readonly EDUCATION = EDUCATION;
  
  private readonly seoService = inject(SeoService);
  
  ngOnInit(): void {
    this.seoService.updateTitle('Experience');
    this.seoService.updateMeta('Professional experience of Bangar Mahammed Ghouse.', 'Experience, Career, Work History');
  }
}