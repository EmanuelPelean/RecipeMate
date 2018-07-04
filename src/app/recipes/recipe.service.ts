import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Chicken Tikka Masala',
      'Favorite Indian Dish!', 'https://c1.staticflickr.com/6/5705/20586696920_6f6effb898_b.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Double Burger',
      'Favorite Burger Dish!',
      'https://cbsnews3.cbsistatic.com/hub/i/r/2018/03/07/481a9418-c3c8-492e-8e92-d1e6ec821075' +
      '/crop/316x284+89+74/resize/270x/47b7fc47127620982695ad69887be491/sonic-burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {

  }
  // This returns a copy of the recipies
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  deleteIngredientFromRecipe(index: number) {

  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.onRecipesChanged();
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.onRecipesChanged();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.onRecipesChanged();
  }

  onRecipesChanged() {
    this.recipesChanged.next(this.recipes.slice());
  }
}
