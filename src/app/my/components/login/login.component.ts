import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { CommonModule } from '@angular/common'; // For structural directives like *ngIf
import { RouterModule } from '@angular/router'; // For navigation

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Declare dependencies here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], // Fixed typo
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigateByUrl('/home');
    } else {
      alert('Invalid username or password');
    }
  }
}
