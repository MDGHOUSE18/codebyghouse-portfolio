import { Component, computed } from '@angular/core';
import { PROJECTS } from '@core/constants/portfolio.constants';
import { SectionHeaderComponent } from '@shared/components/section-header/section-header.component';
import { ProjectImagePlaceholderComponent } from '@shared/components/project-image-placeholder/project-image-placeholder.component';
import { RevealDirective } from '@shared/directives/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeaderComponent, ProjectImagePlaceholderComponent, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly featuredProjects = computed(() => PROJECTS.filter((p) => p.featured));
  readonly otherProjects = computed(() => PROJECTS.filter((p) => !p.featured));
}
