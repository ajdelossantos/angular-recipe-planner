import { Component, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'pepperoni pizza',
      'a weeknight classic',
      'https://image.shutterstock.com/z/stock-photo-pizza-margherita-230090839.jpg'
    ),
    new Recipe(
      'cheese pizza',
      'a weeknight vegetarian classic',
      'https://image.shutterstock.com/z/stock-photo-pizza-margherita-230090839.jpg'
    )
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
