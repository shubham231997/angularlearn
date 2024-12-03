import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './my/components/employee-list/employee-list.component';
import { EmployeeIdComponent } from './my/components/employee-id/employee-id.component';
import { AddEmployeeComponent } from './my/components/add-employee/add-employee.component';
import { SidebarComponent } from './my/components/sidebar/sidebar.component';
import { HomepageComponent } from './my/components/homepage/homepage.component';
import { DataBindingComponent } from "./my/components/data-binding/data-binding.component";
import { LoginComponent } from './my/components/login/login.component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, RouterModule, DataBindingComponent,HomepageComponent,LoginComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';
}
