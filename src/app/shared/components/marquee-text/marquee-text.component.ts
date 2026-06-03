import { Component, input } from '@angular/core';

@Component({
  selector: 'app-marquee-text',
  standalone: true,
  templateUrl: './marquee-text.component.html',
  styleUrl: './marquee-text.component.scss'
})
export class MarqueeTextComponent {
  readonly items = input<string[]>([]);
  readonly reverse = input(false);
}