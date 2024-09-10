import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-elevation',
  templateUrl: './elevation.component.html',
  styleUrl: './elevation.component.css'
})
export class ElevationComponent implements OnInit {
  // Para instalar la Galleria y Lightbox
  // npm i ng-gallery @angular/cdk@17.3.10

  public items: GalleryItem[] = [];

  constructor(public gallery: Gallery) {
  }

  ngOnInit() {
    // Crear la galleria de items
    this.items = this.data.map(item =>
      new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    // Cargar los items en lightbox
    this.basicLightboxExample();
  }

  basicLightboxExample() {
    this.gallery.ref().load(this.items);
  }

  // Datos de imagenes
  private data = [
    {
      srcUrl: 'assets/images/elevation/doc-004.png',
      previewUrl: 'assets/images/elevation/doc-004.png'
    },
    {
      srcUrl: 'assets/images/elevation/doc-005.png',
      previewUrl: 'assets/images/elevation/doc-005.png'
    }
  ];
}
