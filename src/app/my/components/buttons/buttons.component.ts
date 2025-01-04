import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  clickedButton: string = '';

  // Method to handle button click and store the clicked button's name
  buttonClicked(buttonName: string): void {
    this.clickedButton = buttonName;
  }
  

}
