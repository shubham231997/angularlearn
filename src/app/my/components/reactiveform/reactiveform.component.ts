import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  imports: [FormsModule,CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.scss'
})
export class ReactiveformComponent {
  statenamearray: string[] = ['Arunachal pradesh', 'Bihar', 'Delhi', 'up', 'jammu and Kashmir']

}
