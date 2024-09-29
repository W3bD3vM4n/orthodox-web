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
      srcUrl: 'assets/images/gallery/2024-01-11_f1-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-01-11_f1-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-01-11_f2-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-01-11_f2-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-01-11_f3-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-01-11_f3-gallery2.jpg'
    },
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
    },
    {
      srcUrl: 'assets/images/gallery/2024-01-12_f1-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-01-12_f1-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-01-12_f2-gallery.jpg',
      previewUrl: 'assets/images/gallery/2024-01-12_f2-gallery.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-01-14_f1-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-01-14_f1-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-01-14_f2-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-01-14_f2-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-01-19_f1-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-01-19_f1-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-01-19_f2-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-01-19_f2-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-01-25_f1-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-01-25_f1-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-01-27_f1-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-01-27_f1-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-02-01_f1-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-02-01_f1-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-03-07_f1-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-03-07_f1-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-04-09_f1-gallery.jpg',
      previewUrl: 'assets/images/gallery/2024-04-09_f1-gallery.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-05-13_f2-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-05-13_f2-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-05-30_f0-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-05-30_f0-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-07-10_f0-gallery2.jpeg',
      previewUrl: 'assets/images/gallery/2024-07-10_f0-gallery2.jpeg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-08-27_f1-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-08-27_f1-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-08-27_f4-gallery.jpg',
      previewUrl: 'assets/images/gallery/2024-08-27_f4-gallery.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-08-27_f5-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-08-27_f5-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-08-27_f6-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-08-27_f6-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-08-27_f7-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-08-27_f7-gallery2.jpg'
    },

    {
      srcUrl: 'assets/images/gallery/2024-09-22_f0-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-09-22_f0-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-09-23_f1-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-09-23_f1-gallery2.jpg'
    },
    {
      srcUrl: 'assets/images/gallery/2024-09-23_f3-gallery2.jpg',
      previewUrl: 'assets/images/gallery/2024-09-23_f3-gallery2.jpg'
    },
  ];
}
