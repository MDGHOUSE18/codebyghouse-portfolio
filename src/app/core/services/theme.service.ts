import { Injectable, signal, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  
  readonly currentTheme = signal<Theme>('dark');
  
  constructor() {
    this.loadTheme();
  }
  
  private loadTheme(): void {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as Theme;
      if (saved) {
        this.currentTheme.set(saved);
      }
    }
    this.applyTheme();
  }
  
  toggleTheme(): void {
    const newTheme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.currentTheme.set(newTheme);
    this.applyTheme();
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  }
  
  private applyTheme(): void {
    this.document.documentElement.setAttribute('data-theme', this.currentTheme());
  }
}