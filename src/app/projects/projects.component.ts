import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  inputs: ['projectsData']
})
export class ProjectsComponent implements OnInit {
  
  @Input() public projectsData;

  constructor() { }

  ngOnInit() { }

}
