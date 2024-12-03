import { Component } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [ RouterModule,CommonModule,],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  issidebarvisible : boolean = true
  hide4(){
    this.issidebarvisible = !this.issidebarvisible;
  }
  
}
