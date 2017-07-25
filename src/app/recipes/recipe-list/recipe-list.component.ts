import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [
		new Recipe('Test Recipe', 'First test recipe', 'https://cdn.pixabay.com/photo/2016/08/25/19/23/jalapeno-1620473_960_720.jpg'),
		new Recipe('Second Recipe', 'Test recipe #2', 'https://cdn.pixabay.com/photo/2016/08/25/19/23/jalapeno-1620473_960_720.jpg')
	];

	constructor() {

	}

	ngOnInit() {

	}

}
