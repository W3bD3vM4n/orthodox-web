import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Cartelera } from "../../models/cartelera.interface";
import { CarteleraService } from "../../services/cartelera.service";

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrl: './events-detail.component.css',
  providers: [DatePipe] // Incluye el DatePipe como proveedor
})
export class EventsDetailComponent implements OnInit {

  breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Events', url: '/events' },
  ];

  carteleraArticles: Cartelera | undefined;;

  constructor(private route: ActivatedRoute, private carteleraService: CarteleraService, private datePipe: DatePipe) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carteleraService.getCarteleraById(id).subscribe((data: Cartelera) => {
      if (data.tipo === 'anuncio') {
        this.carteleraArticles = data;
      }
    });
  }

  getFormattedDate(fecha: string): string {
    // Da formato a la fecha de año/mes/dia
    return this.datePipe.transform(fecha, 'yyyy/MM/dd') || '';
  }

}
