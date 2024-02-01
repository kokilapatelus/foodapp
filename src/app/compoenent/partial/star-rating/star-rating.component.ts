import { Component,Input } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {

  @Input()
  stars!:number;
  @Input()
  sizes: number =1;
 @Input()
 totalstars!:number
 @Input()
 value!:number
 @Input()
 readonly:boolean = false;
  get styles(){
    return{
      'width.rem': this.sizes,
      'height.rem': this.sizes,
      'marginRight.rem': this.sizes/6,
    }
  }
  getStarImage(current: number) : string{
    const previousHalf = current - 0.5;
    const imageName = this.stars >= current
    ? 'star-full'
    : this.stars >= previousHalf
    ? 'star-half'
    : 'star-empty';
    return `/assets/stars/${imageName}.svg`;
  }
}
