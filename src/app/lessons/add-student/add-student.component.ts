import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LessonService} from "../service/lesson.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  constructor(private lessonService: LessonService) {
  }

  ngOnInit() {
  }

  addStudent(studentForm: NgForm) {
    let name = studentForm.value.name;
    let time = studentForm.value.time;
    let date = studentForm.value.date;

    this.lessonService.addStudent(studentForm);
  }

}
