import { state, style, trigger } from '@angular/animations';

export const PageLoadAnimation = [
    trigger('loadPage', [
      state('hide', style({opacity:0, transform: 'translate(0px, 80px)', transition: 'all 500ms ease-in-out'})),
      state('show', style({opacity:1, transform: 'translate(0px, 0px)', transition: 'all 500ms ease-in-out'}))
    ]),
  ]