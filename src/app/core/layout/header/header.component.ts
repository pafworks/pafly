import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'pafly';
  images = [];

  constructor(
      private imageServ: ImageService
  ) {}


  ngOnInit() {

  }
}
