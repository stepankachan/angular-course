import {Component, Input} from '@angular/core';
import {AppLesson} from '../../models/lesson';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

  @Input('lesson')
  lesson: AppLesson;

  @Input('itemNumber')
  itemNumber: number;

  openMenuItem() {
  }
}
