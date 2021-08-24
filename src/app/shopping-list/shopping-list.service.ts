import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredients[]>();
  startedEditing =  new Subject<number>();
 private ingredients : Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Banana', 7)
  ];

  getIngredients(){
      return this.ingredients.slice();
  }

  getIngredient(index:number){
    return this.ingredients[index];

  }

  addIngredients(ingredients:Ingredients){
    this.ingredients.push(ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

    addIngredient(ingredient:Ingredients[]){
    //  for(let ingredie of ingredient){
    //    this.addIngredient(ingredie);
     // }
     this.ingredients.push(...ingredient);
     this.ingredientsChanged.next(this.ingredients.slice());

    }

    updateIngredient(index:number, newIngredient:Ingredients){
        this.ingredients[index] =newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
      this.ingredients.splice(index, 1);
      this.ingredientsChanged.next(this.ingredients.slice());

    }
  constructor() { }
}
