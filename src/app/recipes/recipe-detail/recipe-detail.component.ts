import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input () recipeDetails: Recipe;


  menuDisplayStatus = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onMenuClicked() {
    this.menuDisplayStatus = !this.menuDisplayStatus;

  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetails.ingredients);
  }

}
