import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/Interfaces/Course';
import { CartService } from 'src/app/services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  constructor(private cartService: CartService, public dialog: MatDialog) {}

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
}
