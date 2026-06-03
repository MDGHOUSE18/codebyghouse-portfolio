import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(30px)' })
    ], { optional: true }),
    query(':leave', [
      animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-30px)' }))
    ], { optional: true }),
    query(':enter', [
      animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ], { optional: true }),
    query(':enter @*', [
      animateChild()
    ], { optional: true })
  ])
]);

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('600ms ease-out', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ opacity: 0 }))
  ])
]);

export const slideAnimation = trigger('slideAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(100%)', opacity: 0 }),
    animate('500ms cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: 'translateX(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('500ms cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: 'translateX(-100%)', opacity: 0 }))
  ])
]);

export const staggerAnimation = trigger('staggerAnimation', [
  transition(':enter', [
    query('@staggerItem', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger(100, [
        animate('500ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

export const staggerItem = trigger('staggerItem', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('500ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
  ]),
  transition(':leave', [
    animate('300ms', style({ opacity: 0 }))
  ])
]);