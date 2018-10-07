import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface Images {
    pics: any[];
    descriptions: string[];
}


@Injectable()
export class ImageService {

    imageUrl = 'http://pafly.com/pafly_php_api/image/image.php/images/';

    constructor(
        private http: HttpClient
    ) {}


    getImagesforView(view: string) {
        return this.http.get<Images>(this.imageUrl + view);
    }

}


