import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {
  @Input() carouselItemTitle: string = '';
  @Input() carouselItemSubTitle: string = '';
  @Input() carouselItemText: string = '';
  @Input() carouselItemImage: string = '';
  @Input() carouselItemIsActive: string = '';
  @Input() carouselItemIconsBlock: boolean;
  @Input() carouselItemIcons: any = [];

  constructor() { }

  ngOnInit() {
  }

}
