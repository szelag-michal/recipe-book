import { Component, OnInit, OnDestroy } from '@angular/core';
import {ShoppingListService} from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }
  ingredients: Ingredient[];
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChange.subscribe(
      (ingredients: Ingredient[]) => { this.ingredients = ingredients; }
    );
  }

  onIngredientAdded(ingredient: Ingredient) {
    // this.ingredients.push(ingredient);

  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
