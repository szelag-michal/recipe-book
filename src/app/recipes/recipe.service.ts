import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Recipe} from './recipe.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [];

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
  setRecipes(recipes: Recipe[]) {
    return this.recipes = recipes;
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
    this.copyRecipes();
  }
}
