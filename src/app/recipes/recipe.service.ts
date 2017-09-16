import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
			'Chilli Dog',
			'Delicious <em>Sonic the Hedgehog</em> style spicy hot dog.',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Hot_dogs_with_jalapeno_peppers_and_cheese_sauce.jpg/640px-Hot_dogs_with_jalapeno_peppers_and_cheese_sauce.jpg',
			[
				new Ingredient('Hot Dog', 1),
				new Ingredient('Jalepenos (sliced)', 3),
				new Ingredient('Bun', 1),
				new Ingredient('Tomato Sauce', 1),
				new Ingredient('Mustard', 1),
				new Ingredient('Cheese (shredded)', 2)
			]
		),
		new Recipe(
			'Jalepeno Bowl',
			'Super easy to prepare, fun for the whole family.',
			'https://c1.staticflickr.com/3/2494/3770586232_e628e7b461.jpg',
			[
				new Ingredient('Jalepenos (green)', 10),
				new Ingredient('Serving Bowl', 1)
			]
		)
	];

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(index) {
		return this.recipes[index];
	}

}