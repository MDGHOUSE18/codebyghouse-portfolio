import { Routes } from '@angular/router';

const homeLoad = () =>
  import('./features/home/home.component').then((m) => m.HomeComponent);

const legacyPaths: { path: string; fragment: string }[] = [
  { path: 'about', fragment: 'about' },
  { path: 'skills', fragment: 'skills' },
  { path: 'projects', fragment: 'projects' },
  { path: 'experience', fragment: 'about' },
  { path: 'services', fragment: 'about' },
  { path: 'certifications', fragment: 'about' },
  { path: 'contact', fragment: 'contact' }
];

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: homeLoad,
        data: { title: 'Home' }
      },
      ...legacyPaths.map(({ path, fragment }) => ({
        path,
        loadComponent: homeLoad,
        data: { title: 'Home', fragment }
      })),
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];
