import { Component, Input } from '@angular/core';
import { Course } from 'src/app/Interfaces/Course';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.css'],
})
export class WishItemComponent {
  constructor(private wishListService: WishListService) {}

  @Input() wishItem: Course = {
    courseName: '',
    author: '',
    actualPrice: '',
    discountPercentage: '',
    tags: [],
  };

  removeCourseFromCart(wishItem: Course) {
    this.wishListService.deleteFromWish(wishItem.courseName);
  }
}
