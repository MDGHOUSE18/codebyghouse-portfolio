import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CustomCursorComponent } from '@shared/components/custom-cursor/custom-cursor.component';
import { ScrollProgressComponent } from '@shared/components/scroll-progress/scroll-progress.component';
import { PreloaderComponent } from '@shared/components/preloader/preloader.component';
import { ScrollService } from '@core/services/scroll.service';
import { SeoService } from '@core/services/seo.service';
import { routeAnimations } from '@animations/route.animations';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CustomCursorComponent,
    ScrollProgressComponent,
    PreloaderComponent
  ],
  animations: [routeAnimations],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {
  private readonly scrollService = inject(ScrollService);
  private readonly seoService = inject(SeoService);
  
  ngOnInit(): void {
    this.scrollService.init();
    this.seoService.generateSchema();
  }
  
  getRouteAnimationData(): string {
    return '';
  }
}