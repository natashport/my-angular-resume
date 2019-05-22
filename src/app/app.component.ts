import { Component } from '@angular/core';
import data from '../assets/data.json';
import { NavComponent } from './nav/nav.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  myData = data;

}
