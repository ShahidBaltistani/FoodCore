import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cart!:Cart;
  constructor(private cartService: CartService) { this.setCart();}

  ngOnInit(): void {
 
  }

  setCart(){
     this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem){
   this.cartService.removeFromCart(cartItem.food.id);
   this.setCart();
  }
changeQuantity(cartItem:CartItem, quantityInstring:string){
const quantity = parseInt(quantityInstring);
this.cartService.ChangeQuantity(cartItem.food.id, quantity);
this.setCart();
}
}
