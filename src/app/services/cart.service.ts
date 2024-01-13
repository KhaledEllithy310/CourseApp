import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../Interfaces/Course';
import { NotifyService } from './notify.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private notifyService: NotifyService,
    private authService: AuthService
  ) {}

  private cartItems = new BehaviorSubject<Course[]>([]);

  //flag to check if the course is already in the cart
  isCourseExistInCart = false;
  addToCart(course: Course) {
    let auth = this.authService.checkLogin();
    if (auth) {
      // Logic to add product to cart and update the BehaviorSubject
      const isExist = this.cartItems.value.find(
        (item) => item.courseName === course.courseName
      );
      // check if the course is already in the cart
      if (isExist) {
        this.notifyService.info('this course is already in the cart');
        this.isCourseExistInCart = true;
        return;
      }
      // add the course to the cart
      this.cartItems.next([...this.cartItems.value, course]);
      //show notification to the user that the course was added
      this.notifyService.success('course added successfully');
    } else this.notifyService.error('you must login');
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

  clearCart() {
    this.cartItems.next([]);
  }
}
