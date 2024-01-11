import { Component, OnInit } from '@angular/core';
import {
  faCartShopping,
  faHeart,
  faTv,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { Course } from 'src/app/Interfaces/Course';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faCartShopping = faCartShopping;
  faTv = faTv;
  faHeart = faHeart;
  faHome = faHome;
  wishItemsNumber: number = 0;
  cartItemsNumber: number = 0;

  constructor(
    private cartService: CartService,
    private wishListService: WishListService
  ) {}
  ngOnInit(): void {
    this.getCartNumbers();
    this.getWishNumbers();
  }

  getCartNumbers() {
    return this.cartService.getCart().subscribe((res: Course[]) => {
      this.cartItemsNumber = res.length;
    });
  }

  getWishNumbers() {
    return this.wishListService.getWish().subscribe((res: Course[]) => {
      this.wishItemsNumber = res.length;
    });
  }
}
