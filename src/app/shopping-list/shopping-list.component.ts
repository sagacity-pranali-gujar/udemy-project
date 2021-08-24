import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients : Ingredients[];
  private igChangSub: Subscription;
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChangSub = this.slService.ingredientsChanged.subscribe((ingredients:Ingredients[])=>{
      this.ingredients=ingredients;

    });
  }

  onEditItem(index:number){
    this.slService.startedEditing.next(index);

  }

 ngOnDestroy(): void{
   this.igChangSub.unsubscribe();
 }
}
