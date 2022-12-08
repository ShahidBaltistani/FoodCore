import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Foods } from '../shared/models/Foods';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
foods : Foods[]=[];
  constructor(private fs:FoodService, private router:ActivatedRoute ) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if (params['searchItem'])
      this.foods = this.fs.getall().filter(food=>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tags'])
      this.foods = this.fs.getAllFoodByTag(params['tags']);
      else
      this.foods = this.fs.getall();
    })


  }

}
