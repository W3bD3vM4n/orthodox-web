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

  constructor(public gallery: Gallery) {}

  ngOnInit() {
    // Crea la galeria de items #1
    this.items = this.data.map(item =>
      new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    // Carga los items del lightbox #1
    this.gallery.ref().load(this.items);
  }

  // Datos de imagenes #1
  private data = [
    {
      srcUrl: 'assets/images/elevation/doc-001.png',
      previewUrl: 'assets/images/elevation/doc-001.png'
    },
    {
      srcUrl: 'assets/images/elevation/doc-002.png',
      previewUrl: 'assets/images/elevation/doc-002.png'
    },
    {
      srcUrl: 'assets/images/elevation/doc-003.png',
      previewUrl: 'assets/images/elevation/doc-003.png'
    },
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
