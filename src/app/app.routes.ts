import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/main-layout/main-layout.component')
      .then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component')
          .then(m => m.HomeComponent),
        data: { title: 'Home' }
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/about.component')
          .then(m => m.AboutComponent),
        data: { title: 'About' }
      },
      {
        path: 'skills',
        loadComponent: () => import('./features/skills/skills.component')
          .then(m => m.SkillsComponent),
        data: { title: 'Skills' }
      },
      {
        path: 'projects',
        loadComponent: () => import('./features/projects/projects.component')
          .then(m => m.ProjectsComponent),
        data: { title: 'Projects' }
      },
      {
        path: 'experience',
        loadComponent: () => import('./features/experience/experience.component')
          .then(m => m.ExperienceComponent),
        data: { title: 'Experience' }
      },
      {
        path: 'services',
        loadComponent: () => import('./features/services/services.component')
          .then(m => m.ServicesComponent),
        data: { title: 'Services' }
      },
      {
        path: 'testimonials',
        loadComponent: () => import('./features/testimonials/testimonials.component')
          .then(m => m.TestimonialsComponent),
        data: { title: 'Testimonials' }
      },
      {
        path: 'certifications',
        loadComponent: () => import('./features/certifications/certifications.component')
          .then(m => m.CertificationsComponent),
        data: { title: 'Certifications' }
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact.component')
          .then(m => m.ContactComponent),
        data: { title: 'Contact' }
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];