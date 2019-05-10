import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-tests',
  templateUrl: './pipes-tests.component.html',
  styleUrls: ['./pipes-tests.component.scss']
})
export class PipesTestsComponent implements OnInit {

  toggle:boolean = true;
  birthday = new Date(1981, 8, 14);
  
  constructor() { }

  ngOnInit() {
  }

  get format() {return this.toggle ? 'shortDate':'fullDate';}
  
  toggleDateFormat(){
    this.toggle = !this.toggle;
  }

}
