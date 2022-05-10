import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
   recipes:Recipe[]=[
     new Recipe('A Test Recipe' , 'This is simply a test', 'https://pixabay.com/photos/boat-sunset-beach-wave-afterglow-6572384/')
   ]
  constructor() { }

  ngOnInit(): void {
  }

}
