import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputref: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputref: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const iName = this.nameInputref.nativeElement.value;
    const iAmount = this.amountInputref.nativeElement.value;

    const newIngredient = new Ingredient(iName, iAmount)
    this.ingredientAdded.emit(newIngredient);
  }

}
