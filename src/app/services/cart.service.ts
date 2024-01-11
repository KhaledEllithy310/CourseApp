import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../Interfaces/Course';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private notifyService: NotifyService) {}

  private cartItems = new BehaviorSubject<Course[]>([]);

  addToCart(course: Course) {
    // Logic to add product to cart and update the BehaviorSubject
    const isExist = this.cartItems.value.find(
      (item) => item.courseName === course.courseName
    );
    // check if the course is already in the cart
    if (isExist) {
      this.notifyService.info('this course is already in the cart');
      return;
    }
    // add the course to the cart
    this.cartItems.next([...this.cartItems.value, course]);
    //show notification to the user that the course was added
    this.notifyService.success('course added successfully');
    return this.cartItems;
  }

  deleteFromCart(courseName: string) {
    // Logic to remove product from cart and update the BehaviorSubject
    this.cartItems.next([
      ...this.cartItems.value.filter((item) => item.courseName !== courseName),
    ]);
    return this.cartItems;
  }

  //get the cart items
  getCart() {
    return this.cartItems.asObservable();
  }
}
