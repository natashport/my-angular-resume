import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  inputs: ['contactData']
})

export class NavComponent implements OnInit {

  @Input() public contactData;

  constructor() { }

  ngOnInit() { }

}
