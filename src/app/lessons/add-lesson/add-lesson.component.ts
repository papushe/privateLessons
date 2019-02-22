import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LessonService} from "../service/lesson.service";

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss', '../lessons.component.scss']
})
export class AddLessonComponent implements OnInit {

  @Output() close = new EventEmitter<boolean>();
  @Input() studentName;

  constructor(public lessonService: LessonService) {
  }

  ngOnInit() {
  }

  addLesson(formLesson: NgForm) {
    this.lessonService.addLesson(this.studentName, formLesson);
    formLesson.resetForm();
    this.close.emit(true);
  }

  closeModal() {
    this.close.emit(true);
  }

}
