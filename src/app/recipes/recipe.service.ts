import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Recipe} from './recipe.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
    new Recipe(
      'Tasty Shnitzel',
      'Super tasty shniztel - just awesome', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
        ]
      ),
    new Recipe('Big Fat Burger',
 'What else you need to say?', 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
 [
   new Ingredient('Meat', 1),
   new Ingredient('Bun', 1),
   new Ingredient('Cheese', 1)
])
  ];

  constructor(private shoppingListService: ShoppingListService) {}
  copyRecipes() {
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addRecipe(recipe: Recipe)  {
    this.recipes.push(recipe);
    this.copyRecipes();
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.copyRecipes();
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.copyRecipes();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
    this.copyRecipes();
  }
}
