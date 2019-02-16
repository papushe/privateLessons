import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LessonService} from "../service/lesson.service";

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss']
})
export class AddLessonComponent implements OnInit {

  constructor(public lessonService: LessonService) {
  }

  ngOnInit() {
  }

  addLesson(lesson: NgForm) {
    this.lessonService.addLesson(lesson);
    lesson.resetForm();
  }


}
