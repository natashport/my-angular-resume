import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
  inputs: ['carouselItems']
})
export class CarouselItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
