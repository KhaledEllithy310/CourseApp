import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bannerpage',
  templateUrl: './bannerpage.component.html',
  styleUrls: ['./bannerpage.component.css']
})
export class BannerpageComponent {
@Input() title: string = '';
}
