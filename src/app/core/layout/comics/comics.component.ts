import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image-service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  coverThumbs = [];
  imageUrls = [];
  descriptions = [];

  archiveBaseUrl = 'http://www.pafly.com/archive/';

  coverThumbsBaseUrl = this.archiveBaseUrl + 'coverthumbs/';

  constructor(
    private imageServ: ImageService

  ) { }

  ngOnInit() {
    this.coverThumbs = [];
    for ( let index = 0; index < 10; index++ ) {
      this.coverThumbs.push(this.coverThumbsBaseUrl + '00' + index + '.jpg');
    }


  }

  getComic(url) {
    const subStr = url.substr(url.lastIndexOf('/') + 1);
    console.log(subStr);
    console.log(subStr.slice(0, -4));
    let cat = 'pf' + subStr.slice(0, -4);
    if ( cat === 'pf000') {
      cat = 'archiveorig';
    }
    console.log('cat', cat);
    this.imageUrls = [];
    this.imageServ.getImagesforView(cat).subscribe(
      data => {
        for (const pic of Object.keys(data.pics)) {
          console.log(data.pics[pic]);
          this.imageUrls.push('' + data.pics[pic]);
        }
      }
    );


  }

}
