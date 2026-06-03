import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Server
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'skills',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'projects',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'experience',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'services',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'testimonials',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'certifications',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'contact',
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];