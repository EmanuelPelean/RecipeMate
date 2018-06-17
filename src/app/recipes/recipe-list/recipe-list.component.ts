import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken Tikka Masala',
      'Favorite Indian Dish!',
      'https://c1.staticflickr.com/6/5705/20586696920_6f6effb898_b.jpg'),
    new Recipe('Chicken Tikka Masala',
      'Favorite Indian Dish!',
      'https://c1.staticflickr.com/6/5705/20586696920_6f6effb898_b.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
