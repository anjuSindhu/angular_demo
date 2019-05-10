import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-event-binding-tests',
  templateUrl: './event-binding-tests.component.html',
  styleUrls: ['./event-binding-tests.component.scss']
})
export class EventBindingTestsComponent implements OnInit {
  enteredValue : string = "";
  todoArray = [];
  constructor() {
   }

  ngOnInit(){
  }

   
  onMouseEnter(element) {
    this.highLight("yellow", element);
  }

  onMouseLeave(element) {
    //element.style.backgroundColor = 'red';
    this.highLight("red", element);
  }

  highLight( color: String, ele: any){
    ele.style.backgroundColor = color;
  }

  onInputKeyUp(event){
    this.enteredValue = event.target.value;
  }

  addTodo(value){
    if(value ==""  || this.todoArray.includes(value)){ 
      return false;
    }
    this.todoArray.push(value);
  }

  /*delete item*/
  deleteItem(todo){console.log("in delete" + todo);
  this.todoArray.splice(todo,1);
    /*for(let i=0 ;i<= this.todoArray.length ;i++){
     if(todo== this.todoArray[i]){
      this.todoArray.splice(i,1)
     }
    }*/
   }

   // submit Form
  todoSubmit(value:any){
    console.log(value)
    if(value!==""){
      this.todoArray.push(value.todo)
       //this.todoForm.reset()
      }else{
        alert('Field required **')
      }
     }
 
}





