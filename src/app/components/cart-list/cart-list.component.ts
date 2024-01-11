import { Component } from '@angular/core';
import { Course } from 'src/app/Interfaces/Course';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  constructor(private cartService: CartService) {}

  cartItems: Course[] = [];
  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.cartService.getCart().subscribe((res) => {
      this.cartItems = res;
    });
  }
}
