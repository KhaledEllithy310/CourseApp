import { Injectable } from '@angular/core';
import { Course } from '../Interfaces/Course';
import { BehaviorSubject } from 'rxjs';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  private wishItems = new BehaviorSubject<Course[]>([]);
  //flag to check if the course is already in the WishList
  isCourseExistInWishlist = false;

  constructor(private notifyService: NotifyService) {}

  addToWish(course: Course) {
    // Logic to add product to wish and update the BehaviorSubject
    const isExist = this.wishItems.value.find(
      (item) => item.courseName === course.courseName
    );
    // check if the course is already in the wish
    if (isExist) {
      this.notifyService.info('this course is already in the wish');
      this.isCourseExistInWishlist = true;
      return;
    }
    // add the course to the wish
    this.wishItems.next([...this.wishItems.value, course]);
    //show notification to the user that the course was added
    this.notifyService.success('course added successfully');
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
