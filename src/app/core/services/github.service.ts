import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, of } from 'rxjs';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  homepage: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private readonly http = inject(HttpClient);

  readonly repos = signal<GitHubRepo[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  private readonly username = 'MDGHOUSE18';
  private readonly apiUrl = 'https://api.github.com';

  constructor() {
    // Auto-fetch on service creation
    this.fetchRepos();
  }

  fetchRepos(): void {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<GitHubRepo[]>(
      `${this.apiUrl}/users/${this.username}/repos?sort=updated&per_page=30&type=owner`
    ).pipe(
      tap(repos => {
        // Sort by stars, then by updated date
        const sorted = repos.sort((a, b) => {
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        });
        this.repos.set(sorted);
        this.loading.set(false);
      }),
      catchError(err => {
        console.error('GitHub API Error:', err);
        this.error.set('Failed to load repositories');
        this.loading.set(false);
        return of([]);
      })
    ).subscribe();
  }

  getUserProfile() {
    return this.http.get<any>(`${this.apiUrl}/users/${this.username}`);
  }

  getRepoLanguages(repoName: string) {
    return this.http.get<Record<string, number>>(
      `${this.apiUrl}/repos/${this.username}/${repoName}/languages`
    );
  }
}