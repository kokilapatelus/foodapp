import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?:string[]
  tags:Tag[]=[]
  
  
  constructor(private foodservice:FoodService,private router:Router){

  };
  
  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags = this.foodservice.getAllTags();
  }

}
