import { Component } from '@angular/core';
import { Course } from 'src/app/Interfaces/Course';
import { courses } from 'src/app/data';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {

  coursesList:Course[] = courses
}
