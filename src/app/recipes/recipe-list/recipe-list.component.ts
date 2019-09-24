import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
