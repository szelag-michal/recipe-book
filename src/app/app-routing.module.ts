import { NgModule } from '@angular/core';
import {RecipesComponent} from './recipe/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {Routes, RouterModule } from '@angular/router';
@NgModule({
  imports: [RouterModule],
  exports: [AppRoutingModule]
})

const appRoutes : Routes = [
  {path: '', redirectTo: '/recipes'},
  {path: '/recipes', component: RecipesComponent},
  {path: '/shopping-list', component: ShoppingListComponent}

]

export class AppRoutingModule {

}