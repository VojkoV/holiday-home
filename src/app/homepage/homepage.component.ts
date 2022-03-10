import { Component, OnInit } from '@angular/core';
import { ButtonsStrategy, Image, ModalGalleryConfig, ModalGalleryRef, ModalGalleryService, ModalLibConfig } from '@ks89/angular-modal-gallery';
import { CarouselItem } from '../shared/carousel/carousel.component';
import 'hammerjs';
import 'mousetrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  heroCarouselItems: CarouselItem[] = [];
  images: Image[] = []; // init this array with your images

  constructor(private modalGalleryService: ModalGalleryService){
    this.heroCarouselItems.push(new CarouselItem("assets/img/home_slider/balcony1.jpg", "Balcony", "Subtitle", "Read more"))
    this.heroCarouselItems.push(new CarouselItem("assets/img/home_slider/garden1.jpg", "Garden", "Subtitle", "Read more"))

    this.images = [...this.images, new Image(0, { img: "assets/img/home_slider/balcony1.jpg"})];
    this.images = [...this.images, new Image(1, { img: "assets/img/home_slider/garden1.jpg"})];
    // this.images.push(new Image(0, { img: "assets/img/home_slider/garden1.jpg"}))
  }

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
    } as ModalGalleryConfig) as ModalGalleryRef;
  }

  ngOnInit(): void {
  }

}
