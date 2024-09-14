import {Component, HostBinding} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
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
  ],
})
export class HomeComponent {
  isOpen = true;

  ngAfterViewInit() {
    setTimeout( () => {
      this.isOpen = false;
    }, 200);
  }

}
