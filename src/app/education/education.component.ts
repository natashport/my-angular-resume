import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  inputs: ['educationData']
})
export class EducationComponent implements OnInit {

  @Input() public educationData;

  constructor() { }

  ngOnInit() {
  }

}
