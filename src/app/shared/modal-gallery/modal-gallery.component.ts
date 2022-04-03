import { Component } from '@angular/core';
import {
  ButtonsStrategy,
  Image,
  ModalGalleryConfig,
  ModalGalleryService,
  ModalLibConfig,
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-modal-gallery',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.css'],
})
export class ModalGalleryComponent {
  images: Image[] = [
    new Image(0, { img: 'assets/img/apartment_gallery/balcony.jpg' }),
    new Image(1, { img: 'assets/img/apartment_gallery/livingroom.jpg' }),
    new Image(2, { img: 'assets/img/apartment_gallery/diningroom.jpg'}),
    new Image(3, { img: 'assets/img/apartment_gallery/kitchen.jpg'}),
    new Image(4, { img: 'assets/img/apartment_gallery/master_bedroom.jpg'}),
    new Image(5, { img: 'assets/img/apartment_gallery/2nd_room.jpg'}),
    new Image(6, { img: 'assets/img/apartment_gallery/3rd_room.jpg'}),
    new Image(7, { img: 'assets/img/apartment_gallery/loft_bedroom.jpg'}),
    new Image(8, { img: 'assets/img/apartment_gallery/garden1.jpg'}),
    new Image(9, { img: 'assets/img/apartment_gallery/garden2.jpg'}),
  ];
  imageDescriptions: string[] = [
    "View from the balcony",
    "Living room",
    "Dining room",
    "Kitchen",
    "Master bedroom",
    "2nd bedroom (3/4 bed)",
    "3rd bedroom (3/4 bed)",
    "Loft bedroom (double bed)",
    "Garden",
    "Garden"
  ];
  constructor(private modalGalleryService: ModalGalleryService) {

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

}
