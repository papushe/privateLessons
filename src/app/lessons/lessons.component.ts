import {Component, OnInit} from '@angular/core';
import {LessonService} from "./service/lesson.service";

@Component({
  selector: 'app-private-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  constructor(public lessonService: LessonService) {
  }

  ngOnInit() {
  }

}
