import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/Interfaces/Course';
import { CartService } from 'src/app/services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  constructor(
    private cartService: CartService,
    public dialog: MatDialog,
    private wishListService: WishListService
  ) {}

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
  //show modal for user to confirm delete
  openDialog(cartItem: Course) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title: 'Delete Course',
        massage: 'Are you sure to delete this course?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.removeCourseFromCart(cartItem);
        console.log('true');
      } else {
        dialogRef.close();
        console.log('false');
      }
    });
  }

  // Logic to move Course From Cart To Wish
  moveCourseFromCartToWish(cartItem: Course) {
    //add course to wish
    this.wishListService?.addToWish(cartItem)?.subscribe((res) => {
      console.log(res);
    });
    if (this.wishListService.isCourseExistInWishlist) {
      this.wishListService.isCourseExistInWishlist = false;
      return;
    }
    //remove course from cart
    this.cartService.deleteFromCart(cartItem.courseName);
  }
}
