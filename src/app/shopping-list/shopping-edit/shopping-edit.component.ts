import { Ingredient } from './../../shared/ingredients.model';
import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(ingName, ingAmount);

    // this.ingredientAdded.emit(new Ingredient(ingName, ingAmount));
    this.ingredientAdded.emit(newIngredient);
  }
}
