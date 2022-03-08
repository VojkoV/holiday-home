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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CarouselComponent,
    HomepageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, GalleryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
