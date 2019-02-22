import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LessonService} from "../service/lesson.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss', '../lessons.component.scss']
})
export class AddStudentComponent implements OnInit {

  @Output() close = new EventEmitter<boolean>();

  constructor(private lessonService: LessonService) {
  }

  ngOnInit() {
  }

  addStudent(studentForm: NgForm) {
    let name = studentForm.value.name;
    let time = studentForm.value.time;
    let date = studentForm.value.date;

    this.lessonService.addStudent(studentForm);
    this.closeModal();
  }

  closeModal() {
    this.close.emit(true);
  }

}
