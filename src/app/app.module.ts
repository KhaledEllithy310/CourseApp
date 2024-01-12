import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerpageComponent } from './components/bannerpage/bannerpage.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesItemComponent } from './components/courses-item/courses-item.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { WishItemComponent } from './components/wish-item/wish-item.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { ToastrModule } from 'ngx-toastr';
import { ModalComponent } from './components/modal/modal.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    WishlistComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    BannerpageComponent,
    CoursesListComponent,
    CoursesItemComponent,
    CartItemComponent,
    CartListComponent,
    WishItemComponent,
    WishListComponent,
    ModalComponent,
    CartSummaryComponent,
    CourseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
