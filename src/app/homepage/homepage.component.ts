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
import { AUTO_STYLE } from '@angular/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  heroCarouselItems: CarouselItem[] = [];
  images: Image[] = [];

  mapOptions: google.maps.MapOptions = {
    center: { lat: 45.150136625798964, lng: 14.5407098422854 },
    zoom: 5,
  };
  marker = {
    position: { lat: 45.150136625798964, lng: 14.5407098422854 },
  };

  constructor(private modalGalleryService: ModalGalleryService) {
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

    this.images = [
      ...this.images,
      new Image(0, { img: 'assets/img/home_slider/balcony1.jpg' }),
    ];
    this.images = [
      ...this.images,
      new Image(1, { img: 'assets/img/home_slider/garden1.jpg' }),
    ];
    this.images = [
      ...this.images,
      new Image(2, {
        img: 'https://www.putovnica.net/images/full/302989-njivice-krk-plaza-sunset.jpg',
      }),
    ];
    // this.images.push(new Image(0, { img: "assets/img/home_slider/garden1.jpg"}))
  }

  openModal(id: number, imageIndex: number, libConfig?: ModalLibConfig): void {
    const imageToShow: Image = this.images[imageIndex];
    this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: imageToShow,
      libConfig,
      ButtonsStrategy: ButtonsStrategy.SIMPLE,
    } as ModalGalleryConfig);
  }

  ngOnInit(): void {}
}
