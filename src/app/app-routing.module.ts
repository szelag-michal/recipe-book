import { NgModule } from '@angular/core';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes'},
  {path: '/recipes', component: RecipesComponent},
  {path: '/shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule],
  exports: [AppRoutingModule]
})
export class AppRoutingModule {

}
