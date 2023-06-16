import { Product } from 'src/app/models/product';
import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent {
  cartItems: CartItem[]=[];
  constructor(private cartService: CartService,private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.cartService.list();
    console.log(this.cartItems);
  }

  removeFromCart(product:Product){
    this.cartService.removeFromCart(product)
    this.toastrService.error("Deleted",product.productName + "Deleted from Cart")
  }
}
