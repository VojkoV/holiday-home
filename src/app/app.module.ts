import { CalendarModule } from 'primeng/calendar';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';
import { ModalGalleryComponent } from './shared/modal-gallery/modal-gallery.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GMapModule} from 'primeng/gmap';
import {InputNumberModule} from 'primeng/inputnumber';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {BadgeModule} from 'primeng/badge';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { GuestNumberInputComponent } from './shared/guest-number-input/guest-number-input.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CarouselComponent,
    HomepageComponent,
    ModalGalleryComponent,
    DateRangePickerComponent,
    GuestNumberInputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, GalleryModule, GoogleMapsModule, NgsRevealModule,
     CalendarModule, BrowserAnimationsModule, GMapModule, InputNumberModule, OverlayPanelModule, BadgeModule,
     ScrollTopModule, ScrollPanelModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
