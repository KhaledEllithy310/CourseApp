import { Component, Input } from '@angular/core';
import { Course } from 'src/app/Interfaces/Course';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.css'],
})
export class CoursesItemComponent {
  faUser = faUser;
  @Input() course: Course = {
    courseName: '',
    author: '',
    actualPrice: '',
    discountPercentage: '',
    tags: [],
  };

  constructor(private cartService: CartService) {}

  convertToNumber(value: string) {
    return parseInt(value);
  }

  addCourseToCart(course: Course) {
    // Logic to add product to cart

    this.cartService?.addToCart(course)?.subscribe((res) => {
      console.log(res);
    });
  }
}
