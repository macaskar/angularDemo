import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

/*  <courses>             =>  "courses"
   <div class="courses"   =>  ".courses"
   <div id = "courses"    =>  "#courses"
 */

@Component({
  selector: 'courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = "List of courses";
  imageUrl = "http://cdn.attackofthecute.com/August-04-2011-04-01-45-iChat%20Image(2133844088).jpeg";
  courses;
  isActive = true;

  constructor(service : CoursesService){
      this.courses = service.getCourses();
  }

  onDivClicked(){
    console.log("div was clicked");
  }

  onSave($event){
    $event.stopPropagation();
    this.isActive = !this.isActive;
    console.log("is clicked ", $event);
  }

  ngOnInit() {
  }

}
