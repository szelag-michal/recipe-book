import { Http, Response } from '@angular/http';
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
    getRecipes() {
        return this.http.get('https://lakomy-lasuch.firebaseio.com/recipes.json').subscribe(
            (r: Response) => {
                const recipes: Recipe[] = r.json();
                this.recipeService.setRecipes(recipes);
                console.log(recipes);
            }
        );
    }
}
