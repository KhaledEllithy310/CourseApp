import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/Interfaces/Course';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  constructor(private cartService: CartService) {}

  @Input() cartItem: Course = {
    courseName: '',
    author: '',
    actualPrice: '',
    discountPercentage: '',
    tags: [],
  };

  removeCourseFromCart(cartItem: Course) {
    this.cartService.deleteFromCart(cartItem.courseName);
  }
}
