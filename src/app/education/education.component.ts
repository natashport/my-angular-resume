import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  inputs: ['educationData']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
