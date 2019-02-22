import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LessonComponent} from './lessons/lesson/lesson.component';
import {LessonsComponent} from "./lessons/lessons.component";
import {FormsModule} from "@angular/forms";
import {LessonService} from "./lessons/service/lesson.service";
import {AddLessonComponent} from './lessons/add-lesson/add-lesson.component';
import {AddStudentComponent} from './lessons/add-student/add-student.component';
import {ClickOutSideDirective} from './lessons/directive/click-out-side.directive';

@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LessonComponent,
    AddLessonComponent,
    AddStudentComponent,
    ClickOutSideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LessonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
