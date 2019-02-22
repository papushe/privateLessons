import {Injectable} from '@angular/core';
import {Lesson} from "../model/lesson";
import {NgForm} from "@angular/forms";
import {Subject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  subLessonChange = new Subject();

  lessons: Lesson[] = [
    {
      name: 'Orel',
      data: [
        {
          date: new Date().toISOString().slice(0, 10),
          time: 1
        },
        {
          date: new Date().toISOString().slice(0, 10),
          time: 2
        }
      ]
    },
    {
      name: 'Moshe',
      data: [
        {
          date: new Date().toISOString().slice(0, 10),
          time: 1
        }
      ]
    },
    {
      name: 'Itzik',
      data: [
        {
          date: new Date().toISOString().slice(0, 10),
          time: 1
        }
      ]
    }
  ];

  constructor() {
  }

  addLesson(studentName, formLesson: NgForm) {
    let name = studentName;
    let date = formLesson.value.date;
    let time = formLesson.value.time;

    let index = this.lessons.map(
      (lesson) => {
        return lesson.name;
      }).indexOf(name);
    this.lessons[index].data.push({date: date, time: time});
    this.lessons[index].expand = true;
    this.subLessonChange.next()
  }

  addStudent(studentForm: NgForm) {
    let name = studentForm.value.name;
    let time = studentForm.value.time;
    let date = studentForm.value.date;

    let lesson: Lesson = {
      name: name,
      data: [{
        time: time,
        date: date
      }]
    };
    this.lessons.push(lesson);
    this.lessons[this.lessons.length - 1].expand = true;
  }

}
