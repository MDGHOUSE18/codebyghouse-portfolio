import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  readonly label = input('');
  readonly titleLines = input<string[]>([]);
  readonly description = input('');
  readonly accentLine = input(-1);
}