import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  inputs: ['skillsData']
})
export class SkillsComponent implements OnInit {

  @Input() public skillsData;

  constructor() { }

  ngOnInit() { }

}
