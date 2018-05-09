import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import {map} from 'rxjs/operators';
@Injectable()

export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put('https://lakomy-lasuch.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }
    fetchRecipes() {
        return this.http.get('https://lakomy-lasuch.firebaseio.com/recipes.json');
    }
}
