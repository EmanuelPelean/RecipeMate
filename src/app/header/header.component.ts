import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() viewSelection = new EventEmitter<{displayType: string}>();

  onRecipesSelected() {
    this.viewSelection.emit({displayType: 'recipe'});
  }

  onShoppingListSelected() {
    this.viewSelection.emit({displayType: 'shoppingList'});
  }
}
