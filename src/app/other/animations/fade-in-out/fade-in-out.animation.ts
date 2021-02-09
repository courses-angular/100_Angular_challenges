import {animate, style, transition, trigger} from '@angular/animations';

const animationTime = 1000;
export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
  transition(':enter', [
    style({opacity: 0}),
    animate(animationTime, style({opacity: 1}))
  ]),
  transition(':leave', [
    animate(animationTime, style({opacity: 0}))
  ])
]);
