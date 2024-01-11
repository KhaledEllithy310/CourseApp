import { Component, OnInit } from '@angular/core';
import {
  faCartShopping,
  faHeart,
  faTv,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { Course } from 'src/app/Interfaces/Course';
import { CartService } from 'src/app/services/cart.service';

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
  itemsNumber: number = 0;

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.getCartNumbers();
  }

  getCartNumbers() {
    return this.cartService.getCart().subscribe((res: Course[]) => {
      this.itemsNumber = res.length;
    });
  }
}
