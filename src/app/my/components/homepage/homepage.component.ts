import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-homepage',
  imports: [SidebarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  standalone:true,
})
export class HomepageComponent {
  constructor(){
    console.log("Home");
  }

}
