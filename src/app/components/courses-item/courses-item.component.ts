import { Component, Input } from '@angular/core';
import { Course } from 'src/app/Interfaces/Course';
import {
  faUser,
  faHeart,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cart.service';
import { WishListService } from './../../services/wish-list.service';
@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.css'],
})
export class CoursesItemComponent {
  faUser = faUser;
  faHeart = faHeart;
  faArrowRight = faArrowRight;
  @Input() course: Course = {
    courseName: '',
    author: '',
    actualPrice: '',
    discountPercentage: '',
    tags: [],
  };
  wishItems: Course[] = [];

  constructor(
    private cartService: CartService,
    private wishListService: WishListService
  ) {}

  ngOnInit() {
    this.getWishItems();
  }
  convertToNumber(value: string) {
    return parseInt(value);
  }

  addCourseToCart(course: Course) {
    // Logic to add course to cart
    this.cartService?.addToCart(course);
  }

  addCourseToWish(course: Course) {
    // Logic to add course to wish list
    this.wishListService?.addToWish(course);
  }

  getWishItems() {
    this.wishListService.getWish().subscribe((res) => {
      this.wishItems = res;
    });
  }
}
