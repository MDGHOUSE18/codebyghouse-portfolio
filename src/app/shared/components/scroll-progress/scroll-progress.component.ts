import { Component, inject } from '@angular/core';
import { ScrollService } from '@core/services/scroll.service';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  templateUrl: './scroll-progress.component.html',
  styleUrl: './scroll-progress.component.scss'
})
export class ScrollProgressComponent {
  readonly scrollService = inject(ScrollService);
}