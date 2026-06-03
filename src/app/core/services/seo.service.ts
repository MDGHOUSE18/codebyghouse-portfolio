import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { PROFILE } from '../constants/portfolio.constants';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  
  updateTitle(pageTitle: string): void {
    this.title.setTitle(`${pageTitle} | ${PROFILE.name}`);
  }
  
  updateMeta(description: string, keywords: string): void {
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ name: 'author', content: PROFILE.name });
    
    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: `${PROFILE.name} - ${PROFILE.title}` });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: PROFILE.name });
    
    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: `${PROFILE.name} - ${PROFILE.title}` });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }
  
  generateSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: PROFILE.name,
      jobTitle: PROFILE.title,
      url: 'https://mahammedghouse.dev',
      sameAs: [PROFILE.github, PROFILE.linkedin],
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance'
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: PROFILE.location
      }
    };
    
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }
}