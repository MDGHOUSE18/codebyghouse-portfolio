import { Component } from '@angular/core';
import { SKILL_CATEGORIES } from '@core/constants/portfolio.constants';
import { SectionHeaderComponent } from '@shared/components/section-header/section-header.component';
import { RevealDirective } from '@shared/directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeaderComponent, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  readonly SKILL_CATEGORIES = SKILL_CATEGORIES;
}
