import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aeps',
  imports: [CommonModule,FormsModule],
  templateUrl: './aeps.component.html',
  styleUrl: './aeps.component.scss'
})
export class AepsComponent {
  banknamearray : string[] = ['SBI','PNB','ALLAHABAD BANK','PAYTM BANK','KOTAK MAHINDRA BANK','OPTICAL BANK ']
  transactiontypearray : string[] = ['IMPS','NEFT','RTGS','cash']

}
