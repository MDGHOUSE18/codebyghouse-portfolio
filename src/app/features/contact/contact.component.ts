import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PROFILE } from '@core/constants/portfolio.constants';
import { SectionHeaderComponent } from '@shared/components/section-header/section-header.component';
import { MagneticButtonComponent } from '@shared/components/magnetic-button/magnetic-button.component';
import { RevealDirective } from '@shared/directives/reveal.directive';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, SectionHeaderComponent, MagneticButtonComponent, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly PROFILE = PROFILE;
  readonly submitStatus = signal<'idle' | 'success' | 'error'>('idle');

  formData: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  submitForm(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.submitStatus.set('idle');

    const formData = new FormData();
    formData.append('access_key', '1ba5c8e4-4c8a-4bb7-ac6c-d1659d84b549');
    formData.append('name', this.formData.name);
    formData.append('email', this.formData.email);
    formData.append('subject', 'Portfolio Contact');
    formData.append('message', this.formData.message);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          this.submitStatus.set('success');
          this.formData = { name: '', email: '', message: '' };
        } else {
          this.submitStatus.set('error');
        }
      })
      .catch(() => this.submitStatus.set('error'))
      .finally(() => {
        setTimeout(() => this.submitStatus.set('idle'), 5000);
      });
  }
}
