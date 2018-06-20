import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken Tikka Masala',
      'Favorite Indian Dish!', 'https://c1.staticflickr.com/6/5705/20586696920_6f6effb898_b.jpg'),
    new Recipe('Double Burger',
      'Favorite Burger Dish!',
      'https://cbsnews3.cbsistatic.com/hub/i/r/2018/03/07/481a9418-c3c8-492e-8e92-d1e6ec821075' +
      '/crop/316x284+89+74/resize/270x/47b7fc47127620982695ad69887be491/sonic-burger.jpg')
  ];

  @Output () selectedListItem = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onListItemSelected(recipe: Recipe) {
    this.selectedListItem.emit(recipe);
  }

}
