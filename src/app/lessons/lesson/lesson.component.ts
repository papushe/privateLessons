import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Lesson} from "../model/lesson";
import {LessonService} from "../service/lesson.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit, OnDestroy {

  @Input() lesson: Lesson;
  newAmountOnAddLessonSubscription: Subscription;
  @Output() studentName = new EventEmitter<string>();

  constructor(private lessonService: LessonService) {
  }

  ngOnInit() {
    this.calculateAmount();
    this.newAmountOnAddLesson();
  }

  newAmountOnAddLesson() {
    this.newAmountOnAddLessonSubscription = this.lessonService.subLessonChange
      .subscribe(() => {
        this.calculateAmount();
      })
  }

  calculateAmount() {
    let time = 0;
    for (let i = 0; i < this.lesson.data.length; i++) {
      time += this.lesson.data[i].time;
    }
    this.lesson.amount = time * 100;
  }

  toggleExpand() {
    this.lesson.expand = !this.lesson.expand;
  }

  toggleShowAddLesson(name) {
    this.studentName.emit(name);
  }

  ngOnDestroy() {
    this.newAmountOnAddLessonSubscription.unsubscribe();
  }

}
