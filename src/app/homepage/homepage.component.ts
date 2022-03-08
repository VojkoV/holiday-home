import { Component, OnInit } from '@angular/core';
import { Image, ModalGalleryConfig, ModalGalleryRef, ModalGalleryService } from '@ks89/angular-modal-gallery';
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

  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[imageIndex],
      libConfig: {
        slideConfig: {
          infinite: true,
          sidePreviews: {
            show: false
          }
        }
      }
    } as ModalGalleryConfig) as ModalGalleryRef;
  }

  constructor(private modalGalleryService: ModalGalleryService){
    this.heroCarouselItems.push(new CarouselItem("assets/img/home_slider/balcony1.jpg", "Balcony", "Subtitle", "Read more"))
    this.heroCarouselItems.push(new CarouselItem("assets/img/home_slider/garden1.jpg", "Garden", "Subtitle", "Read more"))

    this.images.push(new Image(0, { img: "assets/img/home_slider/balcony1.jpg"}))
    this.images.push(new Image(0, { img: "assets/img/home_slider/garden1.jpg"}))
  }

  ngOnInit(): void {
  }

}
