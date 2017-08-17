import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

	@ViewChild('nameInput') nameInput: ElementRef;
	@ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(e) {
  	e.preventDefault();
  	e.stopPropagation();
  	this.shoppingListService.addIngredient(
  		new Ingredient(
  			this.nameInput.nativeElement.value,
  			this.amountInput.nativeElement.value
  		)
  	);
  }

}
