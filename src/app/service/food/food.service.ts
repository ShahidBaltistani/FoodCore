import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/Foods';
import { Tag } from 'src/app/shared/models/Tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getall() : Foods[]{
    return[
     {
       id: 1,
       name: 'Pasta',
       price: 9,
       cookTime : '40 - 50',
       favorite : true,
       origins : ['pakistan'],
       star : 1,
       imageUrl : '/assets/f1.jpg',
       tags: ['Itelian', 'Pasta', 'Lunch']
     },
     {
       id: 2,
       name: 'Chinese chowmin',
       price: 9,
       cookTime : '40 - 50',
       favorite : true,
       origins : ['pakistan'],
       star : 2,
       imageUrl : '/assets/f2.jpg',
       tags: ['Itelian', 'Pasta', 'Lunch']
     },
     {
       id: 3,
       name: 'Nuts',
       price: 9,
       cookTime : '40 - 50',
       favorite : true,
       origins : ['pakistan'],
       star : 3,
       imageUrl : '/assets/f3.jpg',
       tags: ['Itelian', 'Pasta', 'Lunch']
     },
     {
       id: 4,
       name: 'Chicken Noodles',
       price: 9,
       cookTime : '40 - 50',
       favorite : true,
       origins : ['pakistan'],
       star : 4,
       imageUrl : '/assets/f4.jpg',
       tags: ['Chinese', 'Chowmin', 'Lunch']
     },
     {
       id: 5,
       name: 'Burger',
       price: 9,
       cookTime : '40 - 50',
       favorite : true,
       origins : ['pakistan'],
       star : 5,
       imageUrl : '/assets/f5.jpg',
       tags: ['Itelian', 'Pasta', 'Lunch']
     },
     {
       id: 6,
       name: 'Beef Stack',
       price: 9,
       cookTime : '40 - 50',
       favorite : true,
       origins : ['pakistan'],
       star: 3,
       imageUrl : '/assets/f6.jpg',
       tags: ['Continental', 'Stack', 'Dinner']
     },
     {
       id: 7,
       name: 'Brwnee',
       price: 9,
       cookTime : '40 - 50',
       favorite : true,
       origins : ['pakistan'],
       star : 4.5,
       imageUrl : '/assets/f7.jpg',
       tags: ['Continental', 'Sweet', 'Lunch']
     },
     {
       id: 8,
       name: 'Beef Stack',
       price: 9,
       cookTime : '40 - 50',
       favorite : true,
       origins : ['Continental'],
       star : 1.2,
       imageUrl : '/assets/f1.jpg',
       tags: ['Continental', 'Beef Stack', 'Dinner']
     }

    ]
  }

  getAllFoodByTag(tag:string): Foods[]{

    return tag == 'ALL'? this.getall(): this.getall().filter(food=>food.tags?.includes(tag));

  }
  getAllTag(): Tag[]{
    return[

      {name:'All', count: 8 },
      {name:'FastFood', count: 7 },
      {name:'Chinese', count: 6 },
      {name:'Pakistani', count: 5 },
      {name:'Lunch', count: 4 },
      {name:'Hamburger', count: 3 },
      {name:'Fry', count: 2 },
      {name:'Soup', count: 1 },
    ];
  }
}
