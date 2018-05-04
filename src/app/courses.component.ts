import { CoursesService } from './courses.service';
import { Component } from "@angular/core";
import { Services } from '@angular/core/src/view';

/*  <courses>             =>  "courses"
   <div class="courses"   =>  ".courses"
   <div id = "courses"    =>  "#courses"
 */

@Component({
    selector: 'courses',
    template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course}}
        </li>
    </ul>
    `  
})
export class CoursesComponent{
    title = "List of courses";
    courses;

    constructor(service : CoursesService){
        this.courses = service.getCourses();
    }
}