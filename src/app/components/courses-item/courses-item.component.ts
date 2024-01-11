import { Component, Input } from '@angular/core';
import { Course } from 'src/app/Interfaces/Course';
import { faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.css']
})
export class CoursesItemComponent {
faUser=faUser


@Input () course: Course={
  courseName: '',
  author: '',
  actualPrice: '',
  discountPercentage: '',
  tags: []
}

  convertToNumber(value:string) {
    return parseInt(value);
  }
}
