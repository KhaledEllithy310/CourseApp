import { Component } from '@angular/core';
import { Course } from 'src/app/Interfaces/Course';
import { courses } from 'src/app/data';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent {
  totalLength: number = courses.length;
  p: number = 1;
  itemsPerPage: number = 8;
  coursesList: Course[] = courses;
  filteredCoursesList: Course[] = this.coursesList;
  searchQuery: string = '';

  searchHandler() {
    this.filteredCoursesList = this.coursesList.filter(
      (course) =>
        course.courseName.includes(this.searchQuery) ||
        course.author.includes(this.searchQuery) ||
        course.tags.some((tag) => tag.includes(this.searchQuery))
    );
  }

  sortCourses(event: any) {
    let option = event.target.value;
    switch (option) {
      case 'lowToHigh':
        this.filteredCoursesList.sort(
          (a, b) => +a.actualPrice.slice(1) - +b.actualPrice.slice(1)
        );
        break;
      case 'highToLow':
        this.filteredCoursesList.sort(
          (a, b) => +b.actualPrice.slice(1) - +a.actualPrice.slice(1)
        );
        break;
    }
  }
}
