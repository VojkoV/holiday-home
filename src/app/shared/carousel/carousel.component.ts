import { Component, Input, OnInit } from '@angular/core';

export class CarouselItem{
  constructor(
    public imageSrc: string,
    public title: string,
    public subtitle: string,
    public buttonText: string
  ){}
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() carouselItems: CarouselItem[] = [];
  // , 1011, 984
  constructor() {}

  ngOnInit(): void {
  }

}
