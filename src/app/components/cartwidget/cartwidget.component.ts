import { Component } from '@angular/core';
import { Course } from 'src/app/Interfaces/Course';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cartwidget',
  templateUrl: './cartwidget.component.html',
  styleUrls: ['./cartwidget.component.css'],
})
export class CartwidgetComponent {
  constructor(private cartService: CartService) {}

  cartItems: Course[] = [];
  totalActualPrice: number = 0;

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.cartService.getCart().subscribe((res) => {
      this.cartItems = res;
      this.totalCartValue();
    });
  }

  totalCartValue() {
    this.totalActualPrice = this.cartItems.reduce(
      (sum, course) => sum + +course.actualPrice.slice(1),
      0
    );
  }
}
