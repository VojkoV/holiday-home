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
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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

  numberOfMonthsInCalendar: number = 3;
  maxDate: NgbDateStruct;
  minDate: NgbDateStruct;

  constructor(
    private modalGalleryService: ModalGalleryService,
    ngsRevealConfig: NgsRevealConfig,
    private breakpointObserver: BreakpointObserver
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

    // detect screen size changes
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((result: BreakpointState) => {
        if (result.matches) this.numberOfMonthsInCalendar = 1;
        else this.numberOfMonthsInCalendar = 3;
      });

      var currentDate = new Date();
      currentDate.setMonth(currentDate.getMonth() + 1);

      var maxDate = new Date(currentDate);
      maxDate.setMonth(maxDate.getMonth() + 12);
      console.log(maxDate)

      this.minDate = { day: currentDate.getDate(), month: currentDate.getMonth(), year: currentDate.getFullYear() };
      this.maxDate = { day: maxDate.getDate(), month: maxDate.getMonth(), year: maxDate.getFullYear() };

      console.log(this.minDate)
      console.log(this.maxDate)
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
