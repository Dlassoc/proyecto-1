import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HomeComponent, MatSlideToggleModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name = 'Daniel';
  isLoggedIn = false;
  register = false;

}
