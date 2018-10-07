import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';

import { HeaderComponent} from './core/layout/header/header.component';
import { AppComponent } from './app.component';
import { core } from '@angular/compiler';
import { ImageService } from './core/services/image-service';
import { ComicsComponent } from './core/layout/comics/comics.component';

import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
// import {CarouselModule} from 'primeng/carousel';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComicsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot()
    // CarouselModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
