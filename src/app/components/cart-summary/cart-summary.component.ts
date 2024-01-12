import { Component, SimpleChanges } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from 'src/app/Interfaces/Course';
import { CartService } from 'src/app/services/cart.service';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { NotifyService } from './../../services/notify.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent {
  constructor(
    private cartService: CartService,
    public dialog: MatDialog,
    private notifyService: NotifyService
  ) {}

  //===================== VARIABLES =====================//

  cartItems: Course[] = [];
  totalActualPrice: number = 0;
  totalSavingsPrice: number = 0;

  //===================== HANDLES CART DATA =====================//
  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.cartService.getCart().subscribe((res) => {
      //update cart items
      this.cartItems = res;
      //update total cart value
      this.totalCartValue();
      //update total savings
      this.totalSavings();
    });
  }

  totalCartValue() {
    this.totalActualPrice = this.cartItems.reduce(
      (sum, course) => sum + +course.actualPrice.slice(1),
      0
    );
  }

  totalSavings() {
    this.totalSavingsPrice = this.cartItems.reduce(
      (sum, course) =>
        sum +
        +course.actualPrice.slice(1) *
          (1 - +course.discountPercentage.slice(0, -1) / 100),
      0
    );

    this.totalSavingsPrice = +this.totalSavingsPrice.toFixed(2);
  }

  //show modal for user to confirm checkout
  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title: 'Checkout',
        massage: 'Are you sure to checkout?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        //clear cart
        this.cartService.clearCart();
        this.notifyService.success('order placed Successfully');
      } else {
        dialogRef.close();
      }
    });
  }
}
