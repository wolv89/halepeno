import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

	ingredientsChanged = new EventEmitter<Ingredient[]>();

	private ingredients: Ingredient[] = [
		new Ingredient('Jalepeno', 6),
		new Ingredient('Chicken Breast', 2)
	];

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	addIngredients(newIngredients: Ingredient[]) {
		//this.ingredients = this.ingredients.concat(newIngredients);
		this.ingredients.push(...newIngredients);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

}