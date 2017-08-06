import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	@Output() recipeSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe('Test Recipe', 'First test recipe', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Hot_dogs_with_jalapeno_peppers_and_cheese_sauce.jpg/640px-Hot_dogs_with_jalapeno_peppers_and_cheese_sauce.jpg'),
		new Recipe('Second Recipe', 'Test recipe #2', 'https://c1.staticflickr.com/3/2494/3770586232_e628e7b461.jpg')
	];

	constructor() {

	}

	ngOnInit() {

	}

	setRecipe(chosenRecipe: Recipe) {
		this.recipeSelected.emit(chosenRecipe);
	}

}
