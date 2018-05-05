import { CoursesService } from './../courses.service';
import { Component, OnInit, NgModule } from '@angular/core';

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
  email = "me@example.com";

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

  onKeyUp(){
      console.log(this.email);
  }

  ngOnInit() {
  }

  text = `When examining the typical customer journey, it’s not difficult to see why delivery is ripe for improvement. In many cases, it isn't something online retail giants like Amazon are able to control -- at least not right now. Bad weather or an influx in volume around the holidays can delay packages from arriving on time. And what about the complications associated with delivering to shared residences and apartment complexes, like gated access, theft and closed leasing offices?  From my perspective, Amazon is looking at a key factor -- fulfillment -- that likely has a huge impact on customer satisfaction and is attempting to gain greater control of those parts of the customer journey. Here are all the ways Amazon is investing in improving the experience in the form of retail delivery innovation. It’s no wonder that Amazon ranked number one in overall customer experience according to ForeSee's new Retail CX Rankings.`

   course = {
     title : "The complete angular course", 
     rating: 4.9745, 
     students: 30123, 
     price: 190.95, 
     releaseDate: new Date(2018, 5, 5)
   } 
}
