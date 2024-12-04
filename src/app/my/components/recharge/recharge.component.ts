import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-recharge',
  imports: [CommonModule, FormsModule, RouterModule, SidebarComponent],
  templateUrl: './recharge.component.html',
  styleUrl: './recharge.component.scss'
})
export class RechargeComponent {
  name: string = 'Mobile Recharge';
  show: boolean = false;
  mobileNumber: string = ''; 
  savedValue: string = ''; 
  savedamount : number = 0;
  amount: number = 0;
  savedName: string ='';
  name1:string='';
  savedcalender: string ='';
  calender: string ='';
  rechargeMonth: string='';
  savedMonth: string='';
  dropdown: string='';
  savedDropdown: string='';





  data = [
    {empName: 'Airtel'},{empName:'Reliane Jio' }, {empName: 'BSNL'},{empName:'Idea/vodafone'}

  ]
  updateSavedValue() {
    this.savedValue = this.mobileNumber;

  }
  updateamountValue(){
    this.savedamount = this.amount;

  }
  updateNameValue(){
    this.savedName = this.name1;

  }
  updatemonthValue(){
    this.savedcalender= this.calender;

  }
  updataerechargemonth(){
    this.savedMonth = this.rechargeMonth;

  }
  updateDropdownmonth(){
    this.savedDropdown= this.dropdown  }


  submit(){                                                                                                                  
    alert("Recharge");
    this.show = true;
  }
  isamountvisible :boolean = true;
  showdiv1(){
    this.isamountvisible = true;
  }
  hidediv1(){
    this.isamountvisible = false;
  }
  issavedValue: boolean = true;
  showdiv2(){
    this.issavedValue = true;
  }
  hidediv2(){
    this.issavedValue = false;
  }
  ispinvisible :boolean= true;
  showdiv3(){
    this.ispinvisible = ! this.ispinvisible;
  }
 
  isrechargemonthvisible : boolean = false;
  divshow4(){
    this.isrechargemonthvisible = ! this.isrechargemonthvisible;
  }


  cityArray : string[]= ['Muzaffarpur','patna','begusarai','darbhanga','madhubani' ]  
  Rechargeplanarray : number[] = [149,299,310,299,399,499]
  commissionarray : number[] = [2.5,5.6,44,5,4,5,5,67,7,]
  currentstatearray : string[]= ['gurgaon','delhi','noida','gautam buddha nagar']
  newrechargepplanarray : number[] = [159,219,245,299,333,399]
  


}
