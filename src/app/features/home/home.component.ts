import { Component, inject, OnInit, ElementRef, viewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE, SOCIAL_LINKS, MARQUEE_SKILLS } from '@core/constants/portfolio.constants';
import { MarqueeTextComponent } from '@shared/components/marquee-text/marquee-text.component';
import { MagneticButtonComponent } from '@shared/components/magnetic-button/magnetic-button.component';
import { AnimatedCounterComponent } from '@shared/components/animated-counter/animated-counter.component';
import { SeoService } from '@core/services/seo.service';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MarqueeTextComponent,
    MagneticButtonComponent,
    AnimatedCounterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  readonly PROFILE = PROFILE;
  readonly SOCIAL_LINKS = SOCIAL_LINKS;
  readonly MARQUEE_SKILLS = MARQUEE_SKILLS;

  private readonly seoService = inject(SeoService);
  private readonly heroContent = viewChild<ElementRef<HTMLElement>>('heroContent');
  private readonly heroVisual = viewChild<ElementRef<HTMLElement>>('heroVisual');

  ngOnInit(): void {
    this.seoService.updateTitle('Home');
    this.seoService.updateMeta(
      `${PROFILE.name} - ${PROFILE.title}. ${PROFILE.bio}`,
      'Angular Developer, Full Stack, ASP.NET Core, Spring Boot, Bangalore'
    );
  }

  ngAfterViewInit(): void {
    this.animateHero();
  }

  private animateHero(): void {
    if (typeof window === 'undefined') return;

    const content = this.heroContent()?.nativeElement;
    const visual = this.heroVisual()?.nativeElement;

    if (content) {
      gsap.from(content.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.3
      });
    }

    if (visual) {
      gsap.from(visual, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
      });
    }
  }

  getSocialIcon(icon: string): string {
    const icons: Record<string, string> = {
      github: '⚡',
      linkedin: '💼',
      mail: '✉️'
    };
    return icons[icon] || '🔗';
  }
}