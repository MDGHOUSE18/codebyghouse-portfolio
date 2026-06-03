import { Component, inject, OnInit } from '@angular/core';
import { SERVICES } from '@core/constants/portfolio.constants';
import { SectionHeaderComponent } from '@shared/components/section-header/section-header.component';
import { SeoService } from '@core/services/seo.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  readonly SERVICES = SERVICES;
  
  private readonly seoService = inject(SeoService);
  
  ngOnInit(): void {
    this.seoService.updateTitle('Services');
  }
  
  getServiceIcon(icon: string): string {
    const icons: Record<string, string> = {
      code: '💻',
      layout: '🎨',
      server: '⚙️',
      lightbulb: '💡'
    };
    return icons[icon] || '✨';
  }
}