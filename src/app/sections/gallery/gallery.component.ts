import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
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
      srcUrl: 'assets/images/gallery/2024-01-11_f4-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-01-11_f4-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-01-11_f5-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-01-11_f5-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-01-11_f6-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-01-11_f6-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-01-11_f7-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-01-11_f7-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-01-11_f8-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-01-11_f8-gallery2.jpg'
    }
  ];
}
