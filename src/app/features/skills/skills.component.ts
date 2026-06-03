import { Component, inject, OnInit, signal } from '@angular/core';
import { SKILL_CATEGORIES } from '@core/constants/portfolio.constants';
import { SectionHeaderComponent } from '@shared/components/section-header/section-header.component';
import { SeoService } from '@core/services/seo.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  readonly SKILL_CATEGORIES = SKILL_CATEGORIES;
  readonly activeCategory = signal('frontend');

  private readonly seoService = inject(SeoService);

  allTech = [
    'Angular', 'ASP.NET MVC', 'C#', 'SQL Server', 'REST APIs', 'TypeScript',
    'Entity Framework', 'Bootstrap', 'jQuery', 'Stored Procedures', 'JSON Processing',
    'LINQ', 'Git', 'Visual Studio', 'Postman', 'Enterprise Development',
    'ASP.NET Web API', '.NET Framework', 'HTML5', 'CSS3', 'JavaScript', 'npm'
  ];

  ngOnInit(): void {
    this.seoService.updateTitle('Skills');
    this.seoService.updateMeta(
      'Technical skills and expertise of Bangar Mahammed Ghouse - Full Stack Developer.',
      'Skills, Technologies, Angular, .NET, Java'
    );
  }

  setActiveCategory(id: string): void {
    this.activeCategory.set(id);
  }

  getCategoryIcon(id: string): string {
    const icons: Record<string, string> = {
      backend: '⚙️',
      frontend: '🎨',
      database: '🗄️',
      tools: '🛠️'
    };
    return icons[id] || '💡';
  }
}