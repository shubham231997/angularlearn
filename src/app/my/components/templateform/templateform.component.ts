import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-templateform',
  imports: [RouterModule, CommonModule, FormsModule, JsonPipe],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.scss'
})
export class TemplateformComponent {

  statenamearray: string[] = ['Arunachal pradesh', 'Bihar', 'Delhi', 'up', 'jammu and Kashmir']
  studentobj: any = {
    firstname: '',
    middlename: '',
    lastname: '',
    phone: '',
    email: '',
    address: '',
    state: ''

  }
  formValue: any;

  onSubmit() {
    debugger;
    this.formValue = this.studentobj;


  }

  



  }

