import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PROFILE, SOCIAL_LINKS } from '@core/constants/portfolio.constants';
import { SectionHeaderComponent } from '@shared/components/section-header/section-header.component';
import { MagneticButtonComponent } from '@shared/components/magnetic-button/magnetic-button.component';
import { SeoService } from '@core/services/seo.service';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, SectionHeaderComponent, MagneticButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  readonly PROFILE = PROFILE;
  readonly SOCIAL_LINKS = SOCIAL_LINKS;
  readonly submitStatus = signal<'idle' | 'success' | 'error'>('idle');
  readonly contactTitleLines = ["Let's Start a", "Conversation"];
  private readonly seoService = inject(SeoService);

  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  ngOnInit(): void {
    this.seoService.updateTitle('Contact');
    this.seoService.updateMeta(
      `Contact ${PROFILE.name} for development opportunities and collaborations.`,
      'Contact, Hire Developer, Freelance'
    );
  }

  getSocialIcon(icon: string): string {
    const icons: Record<string, string> = {
      github: '⚡',
      linkedin: '💼',
      mail: '✉️'
    };
    return icons[icon] || '🔗';
  }

  submitForm(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.submitStatus.set('idle');

    const formData = new FormData();
    formData.append('access_key', '1ba5c8e4-4c8a-4bb7-ac6c-d1659d84b549'); // Replace this
    formData.append('name', this.formData.name);
    formData.append('email', this.formData.email);
    formData.append('subject', this.formData.subject || 'Portfolio Contact');
    formData.append('message', this.formData.message);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.submitStatus.set('success');
          this.formData = { name: '', email: '', subject: '', message: '' };
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