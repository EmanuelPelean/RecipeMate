import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import { Response} from '@angular/http';
import {Recipe} from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: Http,
              private recipeServices: RecipeService) { }

  storeRecipes() {
   return this.http.put('https://manurecipe.firebaseio.com/recipes.json',
      this.recipeServices.getRecipes());
  }

  getRecipes() {
    this.http.get('https://manurecipe.firebaseio.com/recipes.json')
      .subscribe(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          this.recipeServices.setRecipes(recipes);

        }
      );
  }
}
