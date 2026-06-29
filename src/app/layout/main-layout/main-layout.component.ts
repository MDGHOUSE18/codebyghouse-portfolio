import { Component, inject, OnInit, OnDestroy, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollProgressComponent } from '@shared/components/scroll-progress/scroll-progress.component';
import { PreloaderComponent } from '@shared/components/preloader/preloader.component';
import { ScrollToTopComponent } from '@shared/components/scroll-to-top/scroll-to-top.component';
import { ScrollService } from '@core/services/scroll.service';
import { SmoothScrollService } from '@core/services/smooth-scroll.service';
import { SeoService } from '@core/services/seo.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ScrollProgressComponent,
    PreloaderComponent,
    ScrollToTopComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  private readonly scrollService = inject(ScrollService);
  private readonly smoothScroll = inject(SmoothScrollService);
  private readonly seoService = inject(SeoService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.scrollService.init();
    this.smoothScroll.init();
    this.seoService.generateSchema();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        const child = this.router.routerState.root.firstChild;
        const fragment =
          child?.snapshot.fragment ??
          (child?.snapshot.data['fragment'] as string | undefined);
        if (fragment) {
          setTimeout(() => {
            const el = document.getElementById(fragment);
            if (el) this.smoothScroll.scrollTo(el);
          }, 400);
        }
      });
  }

  ngOnDestroy(): void {
    this.smoothScroll.destroy();
  }
}