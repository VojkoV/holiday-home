import { Component, OnInit } from '@angular/core';
import {
  ButtonsStrategy,
  Image,
  ModalGalleryConfig,
  ModalGalleryRef,
  ModalGalleryService,
  ModalLibConfig,
} from '@ks89/angular-modal-gallery';
import { CarouselItem } from '../shared/carousel/carousel.component';
import 'hammerjs';
import 'mousetrap';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  heroCarouselItems: CarouselItem[] = [];

  mapOptions: google.maps.MapOptions = {
    center: { lat: 45.150136625798964, lng: 14.5407098422854 },
    zoom: 5,
  };
  marker = {
    position: { lat: 45.150136625798964, lng: 14.5407098422854 },
  };

  mapOverlays = [
    new google.maps.Marker({
      position: { lat: 45.150136625798964, lng: 14.5407098422854 },
      title: 'Apartment',
      label: 'Apartment',
    }),
  ];

  numberOfGuests: { adults: number, children: number, infants: number} = { adults: 1, children: 0, infants: 0}


  constructor(
    private ngsRevealConfig: NgsRevealConfig,
  ) {
    ngsRevealConfig.duration = 800;
    ngsRevealConfig.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    ngsRevealConfig.delay = 500;
    ngsRevealConfig.distance = '-200px';
    ngsRevealConfig.viewFactor = 0.5;

    this.heroCarouselItems.push(
      new CarouselItem(
        'assets/img/home_slider/balcony1.jpg',
        'Balcony',
        'Subtitle',
        'Read more'
      )
    );
    this.heroCarouselItems.push(
      new CarouselItem(
        'assets/img/home_slider/garden1.jpg',
        'Garden',
        'Subtitle',
        'Read more'
      )
    );

      }

  ngOnInit(): void {}
}
