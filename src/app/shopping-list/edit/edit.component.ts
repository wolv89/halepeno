import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

	@Output() pushIngredient = new EventEmitter<Ingredient>();
	@ViewChild('nameInput') nameInput: ElementRef;
	@ViewChild('amountInput') amountInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addIngredient(e) {
  	e.preventDefault();
  	e.stopPropagation();
  	this.pushIngredient.emit(
  		new Ingredient(
  			this.nameInput.nativeElement.value,
  			this.amountInput.nativeElement.value
  		)
  	);
  }

}
