import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
    getData() {
        return [
            {
                itemImageSrc: 'assets/images/elevation/doc-004.png',
                thumbnailImageSrc: 'assets/images/elevation/doc-004.png',
                alt: 'Documento Elevación Metropolitana #4',
                title: 'Elevación #4'
            },
            {
                itemImageSrc: 'assets/images/elevation/doc-005.png',
                thumbnailImageSrc: 'assets/images/elevation/doc-005.png',
                alt: 'Documento Elevación Metropolitana #5',
                title: 'Elevación #5'
            }
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};