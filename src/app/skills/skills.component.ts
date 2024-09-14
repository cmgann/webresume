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
  selector: 'app-skills',
  standalone: true,
  imports: [AppearDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  animations: [
    trigger('leftRight', [
      // ...
      state(
        'left',
        style({
          // transform: 'translateX(-25%)',
          width: '0%'
          // opacity: 0,
        }),
      ),
      state(
        'right',
        style({
          // transform: 'translateX(0%)',
           width: '100%',
          // opacity: 1,
        }),
      ),
      transition('left => right', [animate('2s')]),
      transition('right => left', [animate('2s')])
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
  ],
})
export class SkillsComponent {

  isOpen = true;

  onAppear(){
    this.isOpen = false;
    console.log('appeared component')
  }

}
