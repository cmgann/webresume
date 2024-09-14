import { Component } from '@angular/core';
import {AppearDirective} from '../directives/appear.directive'
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [AppearDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [
    trigger('leftRight', [
      // ...
      state(
        'left',
        style({
          transform: 'translateX(-25%)',
          opacity: 0,
        }),
      ),
      state(
        'right',
        style({
          transform: 'translateX(0%)',
          opacity: 1,
        }),
      ),
      transition('left => right', [animate('1s')]),
      transition('right => left', [animate('1s')])
    ]),
    trigger('rightLeft', [
      // ...
      state(
        'right',
        style({
          transform: 'translateX(25%)',
          opacity: 0,
        }),
      ),
      state(
        'left',
        style({
          transform: 'translateX(0%)',
          opacity: 1,
        }),
      ),
      transition('right => left', [animate('1s')]),
      transition('left => right', [animate('1s')])
    ]),
    trigger('downUp', [
      // ...
      state(
        'down',
        style({
          opacity: 0,
        }),
      ),
      state(
        'up',
        style({
          bottom: '100%',
          opacity: 1,
        }),
      ),
      transition('down => up', [animate('1s')]),
      transition('up => down', [animate('1s')])
    ]),
  ],
})


export class ExperienceComponent {
  isOpen = true;

  onAppear(){
    this.isOpen = false;
  }

}
