import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '@core/constants/portfolio.constants';
import { SectionHeaderComponent } from '@shared/components/section-header/section-header.component';
import { SeoService } from '@core/services/seo.service';
import { GitHubService } from '@core/services/github.service';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  readonly PROJECTS = PROJECTS;
  readonly activeFilter = signal<string>('all');

  private readonly seoService = inject(SeoService);
  private readonly githubService = inject(GitHubService);
  readonly githubRepos = this.githubService.repos;
  readonly githubLoading = this.githubService.loading;
  filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' }
  ];

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.PROJECTS;
    return this.PROJECTS.filter(p => p.category === filter);
  });

  ngOnInit(): void {
    this.seoService.updateTitle('Projects');
    this.seoService.updateMeta(
      'Portfolio of projects by Bangar Mahammed Ghouse - Full Stack Developer.',
      'Projects, Portfolio, Angular, .NET, Java'
    );
  }

  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      fullstack: 'Full Stack',
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Mobile',
      api: 'API'
    };
    return labels[category] || category;
  }

  onFilterChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.activeFilter.set(select.value);
  }
}
