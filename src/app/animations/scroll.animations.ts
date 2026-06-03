import { trigger, transition, style, animate } from '@angular/animations';

export const scrollReveal = trigger('scrollReveal', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(60px)' }),
    animate('800ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const scrollRevealLeft = trigger('scrollRevealLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-60px)' }),
    animate('800ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

export const scrollRevealRight = trigger('scrollRevealRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(60px)' }),
    animate('800ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

export const scaleReveal = trigger('scaleReveal', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.9)' }),
    animate('600ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'scale(1)' }))
  ])
]);