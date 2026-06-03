import { Component, inject, OnInit } from '@angular/core';
import { CERTIFICATIONS } from '@core/constants/portfolio.constants';
import { SectionHeaderComponent } from '@shared/components/section-header/section-header.component';
import { SeoService } from '@core/services/seo.service';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent implements OnInit {
  readonly CERTIFICATIONS = CERTIFICATIONS;
  
  private readonly seoService = inject(SeoService);
  
  ngOnInit(): void {
    this.seoService.updateTitle('Certifications');
  }
  
  getCertIcon(icon: string): string {
    const icons: Record<string, string> = {
      angular: '🅰️',
      dotnet: '🔷',
      code: '💻',
      spring: '🌱'
    };
    return icons[icon] || '🏆';
  }
}