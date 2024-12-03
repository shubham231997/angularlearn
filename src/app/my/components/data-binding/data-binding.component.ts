import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  //string,number,boolean,date

  courseName : string ="angular";
  inputType = "radio";
  myclassnam: string = "bg-primary";
  rollNo: Number = 123;
  isIndian : boolean = false;
  currentDate: Date = new Date(); 

  constructor(){
    


  }
  changeCourseName(){
    this.courseName = "react Js";

  }
  showAlert(message: string){
    alert(message)

  }
  

}
