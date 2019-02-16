import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Lesson} from "../model/lesson";
import {LessonService} from "../service/lesson.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit, OnChanges, OnDestroy {

  @Input() lesson: Lesson;
  newAmountOnAddLessonSubscription: Subscription;

  constructor(private lessonService: LessonService) {
  }

  ngOnInit() {
    this.newAmountOnAddLesson();
  }

  newAmountOnAddLesson() {
    this.newAmountOnAddLessonSubscription = this.lessonService.subLessonChange
      .subscribe(() => {
        this.calculateAmount();
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateAmount();
    console.log(changes);
    this.lesson = changes.lesson.currentValue;
  }

  calculateAmount() {
    let time = 0;
    for (let i = 0; i < this.lesson.data.length; i++) {
      time += this.lesson.data[i].time;
    }
    console.log('hi');
    this.lesson.amount = time * 100;
  }

  ngOnDestroy() {
    this.newAmountOnAddLessonSubscription.unsubscribe();
  }


}
