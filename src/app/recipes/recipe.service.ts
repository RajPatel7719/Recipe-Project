import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Testy Schnitzel', 'A super-testy Schnitzel - just awesome!', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Wiener_Schnitzel_-_Chicken_with_Cheese_Sauce_-_plus_Frites_and_a_Green_Salad_-_Walvis_Bay%2C_Namibia.jpg/800px-Wiener_Schnitzel_-_Chicken_with_Cheese_Sauce_-_plus_Frites_and_a_Green_Salad_-_Walvis_Bay%2C_Namibia.jpg?20221128222141', [
      new Ingredient('French Fries', 25),
      new Ingredient('Vagitables', 2)
    ]),
    new Recipe('Big Fat Burger', 'What else you need to say?', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/BURGER_KING_PRODUCTS_IN_CHINA_%281%29.jpg/800px-BURGER_KING_PRODUCTS_IN_CHINA_%281%29.jpg?20220430094700', [
      new Ingredient('The Buns', 2),
      new Ingredient('Alootiki', 2)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
