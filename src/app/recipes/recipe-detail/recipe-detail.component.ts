import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

	recipe: Recipe;
  selectedRecipeIndex: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

   // this.selectedRecipeIndex = parseInt(this.route.snapshot.params['id']);
   // this.recipe = this.recipeService.getRecipe(this.selectedRecipeIndex);

   this.route.params.subscribe(
     (params: Params) => {
       this.selectedRecipeIndex = parseInt(params['id']);
       this.recipe = this.recipeService.getRecipe(this.selectedRecipeIndex);
     }
   );


  }

  addIngredientsToShoppingList() {
  	this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}
