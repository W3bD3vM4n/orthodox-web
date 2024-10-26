import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cartelera } from "../../models/cartelera.interface";
import { CarteleraService } from "../../services/cartelera.service";

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrl: './events-detail.component.css'
})
export class EventsDetailComponent implements OnInit {

  breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Events', url: '/events' },
  ];

  carteleraArticles: Cartelera | undefined;;

  constructor(private route: ActivatedRoute, private carteleraService: CarteleraService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carteleraService.getCarteleraById(id).subscribe((data: Cartelera) => {
      if (data.tipo === 'anuncio') {
        this.carteleraArticles = data;
      }
    });
  }

}
