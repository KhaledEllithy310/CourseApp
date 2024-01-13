import { Component, OnInit } from '@angular/core';
import {
  faCartShopping,
  faHeart,
  faTv,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Course } from 'src/app/Interfaces/Course';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from 'src/app/services/wish-list.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

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
  faUser = faUser;
  wishItemsNumber: number = 0;
  cartItemsNumber: number = 0;
  isAuth: boolean = false;
  constructor(
    private cartService: CartService,
    private wishListService: WishListService,
    public authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getCartNumbers();
    this.getWishNumbers();
    this.isAuth = this.authService.checkLogin();
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

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
