import { Component } from '@angular/core';
import { Course } from 'src/app/Interfaces/Course';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private cartService: CartService) {}
  cartItems: Course[] = [];
  ngOnInit(): void {
    this.cartService.getCart().subscribe((res) => {
      this.cartItems = res;
      console.log(res);
    });
  }

  // getCartItems() {
  //   this.cartService.getCart().subscribe((res) => {
  //     //update cart items
  //     this.cartItems = res;
  //     //update total cart value
  //     this.totalCartValue();
  //     //update total savings
  //     this.totalSavings();
  //   });
  // }
}
