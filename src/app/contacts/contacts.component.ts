import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  inputs: ['myData']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
