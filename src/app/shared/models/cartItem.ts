import { Foods } from "./Foods";

export class CartItem{
  food :Foods;
  constructor( food :Foods) {
   this.food =food;
  //  this.price; // javascript code , but u can use this .yourmethod as well

  }
  quantity:number=1;
  get price() : number{
    return this.food.price * this.quantity;
  }
}
