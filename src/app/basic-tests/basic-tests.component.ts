import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-basic-tests',
  templateUrl: './basic-tests.component.html',
  styleUrls: ['./basic-tests.component.scss']
})
export class BasicTestsComponent implements OnInit {
  count : number = 0;
  title = 'angular_demo';
  personInfo: any[];
  
  heroes: any[] = [
    {"id":1, "name": "anju" , "tel": 122334},
    {"id":2, "name": "awani" , "tel": 322334},
    {"id":3, "name": "madhavi" , "tel": 422334}
  ];
  constructor(private httpClnt: HttpClient) { }

  ngOnInit() {
  }

  onShowHideClick(event){
    // fetching some properties of element for test
    console.log("button innerHTML is " + event.target.innerHTML);
    console.log("button type is " + event.target.type);
    console.log("button name is " + event.target.name);
    this.count++;
  }
  
  testRestAPIGet(){
    //https://reqres.in/api/users?page=2
    this.httpClnt.get('https://reqres.in/api/users?page=2').subscribe(
      (data: any) => {
        console.log("data fetched --- " + data.data[0].first_name);
        this.personInfo = data.data;
      }
    )
  }

  testRestAPIPost(){
    //https://reqres.in/api/users?page=2
    this.httpClnt.post('https://reqres.in/api/users', {
      "id":40,"first_name":"Anju","last_name":"Holt","avatar":"https://www.facebook.com/photo.php?fbid=10156327550768013&set=a.10151702188038013&type=3&theater"
    }).subscribe(
      (data: any) => {
        console.log("data fetched --- " + data);
      }
    )
  }

}
