import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../shared/models/Food';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food! : Food
  constructor(private route: ActivatedRoute,
    private foodService: FoodService) {
    route.params.subscribe((params)=>{
      if(params['id'])
      this.food = foodService.getFoodById(params['id']);
      console.log(this.food);
    })}
  ngOnInit(){

  }
}
