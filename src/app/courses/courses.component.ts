import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript the Really Really hard parts',
      description: 'Worship Will Sentance',
      percentComplete: 32,
      favorite: false
    }
  ];

  currentCourse = null;
  constructor() { }

  resetSelectedCourse() {
    const emptyCourse = {
      id: 'null',
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };
    this.currentCourse = emptyCourse;
  }
  setCurrentCourse(course) {
    console.log('SETTING', course);
    this.currentCourse = course;
  }
  onDeleteCourse(course) {
    console.log(course);
    this.courses = this.courses.filter(item => item.id !== course.id);
  }
  ngOnInit(): void {
    this.resetSelectedCourse();
  }
  onCancel() {
    this.resetSelectedCourse();
  }
  saveCourse() {
    console.log('SAVE COURSE');
  }

}
