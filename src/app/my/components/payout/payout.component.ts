import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payout',
  imports: [SidebarComponent,CommonModule],
  templateUrl: './payout.component.html',
  styleUrl: './payout.component.scss'
})
export class PayoutComponent {
  divBgcolor : any;

  constructor(){
    this.divBgcolor = 'demo';
  }

  submit(){
    
  }

}
