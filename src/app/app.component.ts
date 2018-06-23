import { Component } from '@angular/core';
import {ShoppingListService} from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  currentComponentDisplayed = 'recipe';

  onDisplaySelection(selectedView: {displayType: string}) {
      this.currentComponentDisplayed = selectedView.displayType;
  }
}
