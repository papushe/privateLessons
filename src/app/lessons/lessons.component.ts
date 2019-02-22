import {Component, OnInit} from '@angular/core';
import {LessonService} from "./service/lesson.service";

@Component({
  selector: 'app-private-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  showAddLesson: boolean = false;
  showAddStudent: boolean = false;
  studentName: string;

  constructor(public lessonService: LessonService) {
  }

  ngOnInit() {
  }

  toggleShowAddLesson() {
    this.showAddLesson = !this.showAddLesson;
  }

  toggleShowAddStudent() {
    this.showAddStudent = !this.showAddStudent;
  }

  getStudentName(name) {
    this.toggleShowAddLesson();
    this.studentName = name;
  }

}
