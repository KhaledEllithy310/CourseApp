import { Component } from '@angular/core';
import { Course } from 'src/app/Interfaces/Course';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent {
  constructor(private wishListService: WishListService) {}
  totalLength: number = 0;
  p: number = 1;
  itemsPerPage: number = 4;
  wishItems: Course[] = [];
  ngOnInit(): void {
    this.getWishItems();
  }

  getWishItems() {
    this.wishListService.getWish().subscribe((res) => {
      this.wishItems = res;
      this.totalLength = res.length;
    });
  }
}
