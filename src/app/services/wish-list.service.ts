import { Injectable } from '@angular/core';
import { Course } from '../Interfaces/Course';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  private wishItems = new BehaviorSubject<Course[]>([]);

  addToWish(course: Course) {
    // Logic to add product to wish and update the BehaviorSubject
    const isExist = this.wishItems.value.find(
      (item) => item.courseName === course.courseName
    );
    // check if the course is already in the wish
    if (isExist) {
      console.log('this course is already in the wish');
      return;
    }
    this.wishItems.next([...this.wishItems.value, course]);
    return this.wishItems;
  }

  deleteFromWish(courseName: string) {
    // Logic to remove product from wish and update the BehaviorSubject
    this.wishItems.next([
      ...this.wishItems.value.filter((item) => item.courseName !== courseName),
    ]);
    return this.wishItems;
  }

  //get the wish items
  getWish() {
    return this.wishItems.asObservable();
  }
}
