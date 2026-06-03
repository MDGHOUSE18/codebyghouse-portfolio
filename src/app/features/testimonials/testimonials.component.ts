import { Component, inject, OnInit, signal } from '@angular/core';
import { TESTIMONIALS } from '@core/constants/portfolio.constants';
import { SectionHeaderComponent } from '@shared/components/section-header/section-header.component';
import { SeoService } from '@core/services/seo.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit {
  readonly TESTIMONIALS = TESTIMONIALS;
  
  private readonly seoService = inject(SeoService);
  
  ngOnInit(): void {
    this.seoService.updateTitle('Testimonials');
  }
  
  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}