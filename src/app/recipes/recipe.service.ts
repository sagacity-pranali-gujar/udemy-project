import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
 recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Big Pizza', 
    'This is simply Test',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fpxmMH_E-AiBsmYLqVvCmLR3TpclpTt1aw&usqp=CAU',
    [ 
      new Ingredients('Meat',1),
      new Ingredients('French Fries',10)


    ]),

    new Recipe('Big Roll',
     'This is simply Test',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fpxmMH_E-AiBsmYLqVvCmLR3TpclpTt1aw&usqp=CAU',
     [
      new Ingredients('Bun',5),
      new Ingredients('Meat',10)
     ])

  ];
  constructor(private slService: ShoppingListService) { 

  }

    setRecipes(recipes: Recipe[]){
          this.recipes= recipes;
          this.recipesChanged.next(this.recipes.slice());
    }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
      return this.recipes[index];
      
  }

  addIngredientsToShoppingList(ingredients:Ingredients[]){
      this.slService.addIngredient(ingredients);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index:number, newRecipe: Recipe){
     this.recipes[index] = newRecipe;
     this.recipesChanged.next(this.recipes.slice());
  }
   deleteRecipe(index:number){
      this.recipes.splice(index,1);
      this.recipesChanged.next(this.recipes.slice());
   }
  
}
