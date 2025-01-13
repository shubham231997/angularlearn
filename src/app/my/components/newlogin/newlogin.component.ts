
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-newlogin',
  imports: [MatInputModule, MatFormFieldModule],
  templateUrl: './newlogin.component.html',
  styleUrl: './newlogin.component.scss'
})
export class NewloginComponent {

}
