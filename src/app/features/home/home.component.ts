import { Component, inject, OnInit, AfterViewInit, ElementRef, viewChild, DestroyRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PROFILE } from '@core/constants/portfolio.constants';
import { MagneticButtonComponent } from '@shared/components/magnetic-button/magnetic-button.component';
import { SmoothScrollService } from '@core/services/smooth-scroll.service';
import { ScrollService } from '@core/services/scroll.service';
import { SeoService } from '@core/services/seo.service';
import { ProjectsComponent } from '@features/projects/projects.component';
import { SkillsComponent } from '@features/skills/skills.component';
import { AboutComponent } from '@features/about/about.component';
import { ContactComponent } from '@features/contact/contact.component';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MagneticButtonComponent,
    ProjectsComponent,
    SkillsComponent,
    AboutComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  readonly PROFILE = PROFILE;

  private readonly seoService = inject(SeoService);
  private readonly smoothScroll = inject(SmoothScrollService);
  private readonly scrollService = inject(ScrollService);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  private readonly heroEyebrow = viewChild<ElementRef<HTMLElement>>('heroEyebrow');
  private readonly heroHeadline = viewChild<ElementRef<HTMLElement>>('heroHeadline');
  private readonly heroSubline = viewChild<ElementRef<HTMLElement>>('heroSubline');
  private readonly heroCta = viewChild<ElementRef<HTMLElement>>('heroCta');
  private readonly heroWatermark = viewChild<ElementRef<HTMLElement>>('heroWatermark');

  ngOnInit(): void {
    this.seoService.updateTitle('Home');
    this.seoService.updateMeta(
      `${PROFILE.name} - ${PROFILE.title}. ${PROFILE.tagline}`,
      'Angular Developer, Full Stack, ASP.NET Core, .NET, Hyderabad'
    );

    this.route.fragment
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((fragment) => {
        if (fragment) {
          setTimeout(() => {
            const el = document.getElementById(fragment);
            if (el) this.smoothScroll.scrollTo(el);
          }, 200);
        }
      });
  }

  ngAfterViewInit(): void {
    this.scrollService.observeSections();
    this.animateHero();
    this.scrollToFragmentIfNeeded();
  }

  private scrollToFragmentIfNeeded(): void {
    const fragment =
      this.route.snapshot.fragment ??
      (this.route.snapshot.data['fragment'] as string | undefined);
    if (fragment) {
      setTimeout(() => this.smoothScroll.scrollTo(`#${fragment}`), 300);
    }
  }

  scrollToProjects(): void {
    this.smoothScroll.scrollTo('#projects');
  }

  private animateHero(): void {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const eyebrow = this.heroEyebrow()?.nativeElement;
    const headline = this.heroHeadline()?.nativeElement;
    const subline = this.heroSubline()?.nativeElement;
    const cta = this.heroCta()?.nativeElement;
    const watermark = this.heroWatermark()?.nativeElement;

    const lines = headline?.querySelectorAll('.headline-line');

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (eyebrow) {
      tl.from(eyebrow, { y: 30, opacity: 0, duration: 0.8 }, 0.2);
    }
    if (lines?.length) {
      tl.from(lines, { y: 50, opacity: 0, duration: 1, stagger: 0.12 }, 0.35);
    }
    if (subline) {
      tl.from(subline, { y: 30, opacity: 0, duration: 0.8 }, 0.65);
    }
    if (cta) {
      tl.from(cta, { y: 20, opacity: 0, scale: 0.96, duration: 0.8 }, 0.8);
    }
    if (watermark) {
      gsap.fromTo(
        watermark,
        { opacity: 0 },
        { opacity: 0.035, duration: 1.2, ease: 'power2.out', delay: 0.1 }
      );
    }
  }
}
