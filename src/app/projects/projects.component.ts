import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  inputs: ['projectsData']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
