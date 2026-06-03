import { Component, input } from '@angular/core';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  templateUrl: './glass-card.component.html',
  styleUrl: './glass-card.component.scss'
})
export class GlassCardComponent {
  readonly hoverable = input(true);
  readonly featured = input(false);
}