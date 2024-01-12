import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Interfaces/Course';
import { courses } from 'src/app/data';
import { ModalComponent } from '../modal/modal.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  https: any;
  constructor(
    private _sanitizer: DomSanitizer,
    private activate: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  courseName: string | null = '';
  showSaleDate: boolean = false;
  intervalId: any;

  targetCourse: Course = {
    courseName: '',
    author: '',
    actualPrice: '',
    discountPercentage: '',
    tags: [],
  };
  ngOnInit() {
    this.activate.paramMap.subscribe((params) => {
      this.courseName = params.get('courseName');
    });

    this.showCourseByName();
    this.changeTime();
  }

  showCourseByName() {
    courses.find((course) => {
      if (course.courseName == this.courseName) {
        this.targetCourse = course;
      }
    });
  }

  //show modal for user to confirm delete
  openDialog(videoUrl: string) {
    let safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(videoUrl);

    this.dialog.open(ModalComponent, {
      data: {
        title: 'Demo Course',
        url: safeURL,
      },
    });
  }

  getTimeLeft(course: any) {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999); // Set to end of the current day
    if (course.saleEndDate) {
      const timeLeftMs = course.saleEndDate.getTime() - now.getTime();
      if (timeLeftMs <= 0) {
        this.showSaleDate = true;
        // stop timer because Sale has already ended
        clearInterval(this.intervalId);
        return 'Sale ended'; // Sale has already ended
      }

      const hoursLeft = Math.floor(timeLeftMs / (1000 * 60 * 60));
      const minutesLeft = Math.floor(
        (timeLeftMs % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsLeft = Math.floor((timeLeftMs % (1000 * 60)) / 1000);

      // Check if the time left is less than 24 hours
      if (hoursLeft < 24) {
        console.log('Less than 24 hours');

        this.showSaleDate = true; // Set the flag to true to display the sale end time
        return `${hoursLeft} hours ${minutesLeft} minutes left ${secondsLeft} seconds left`;
      } else {
        this.showSaleDate = false; // Set the flag to false to hide the sale end time
        return ''; // Return an empty string if the time left is 24 hours or more
      }
    } else return '';
  }

  changeTime() {
    if (this.targetCourse.saleEndDate) {
      this.getTimeLeft(this.targetCourse);
      //if the the time < 24 hours do play the interval to show the time
      if (this.showSaleDate) {
        this.intervalId = setInterval(() => {
          this.getTimeLeft(this.targetCourse);
        }, 1000);
      }
    }
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
