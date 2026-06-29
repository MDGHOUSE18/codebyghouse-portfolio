import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-project-image-placeholder',
  standalone: true,
  templateUrl: './project-image-placeholder.component.html',
  styleUrl: './project-image-placeholder.component.scss'
})
export class ProjectImagePlaceholderComponent {
  readonly title = input.required<string>();
  readonly image = input<string | undefined>();
  readonly aspect = input<'16/9' | '3/2'>('16/9');

  readonly imageLoadFailed = signal(false);

  onImageError(): void {
    this.imageLoadFailed.set(true);
  }
}
