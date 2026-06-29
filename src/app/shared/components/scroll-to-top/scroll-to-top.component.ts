import { Component, computed, inject } from '@angular/core';
import { ScrollService } from '@core/services/scroll.service';
import { SmoothScrollService } from '@core/services/smooth-scroll.service';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.scss'
})
export class ScrollToTopComponent {
  private readonly scrollService = inject(ScrollService);
  private readonly smoothScroll = inject(SmoothScrollService);

  readonly visible = computed(() => this.scrollService.scrollY() > 400);

  scrollToTop(): void {
    this.smoothScroll.scrollToTop(false);
    history.replaceState(null, '', '#home');
    this.scrollService.activeSection.set('home');
  }
}
