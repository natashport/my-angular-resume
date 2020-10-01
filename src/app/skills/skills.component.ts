import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
  inputs: ["skillsData"],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
