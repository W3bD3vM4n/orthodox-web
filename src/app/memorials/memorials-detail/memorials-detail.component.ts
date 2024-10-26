import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
// import { MemorialsService } from "../memorials.service";
// import { Memorials } from "../memorials.model";

import { Cartelera } from "../../models/cartelera.interface";
import { CarteleraService } from "../../services/cartelera.service";

@Component({
  selector: 'app-memorials-detail',
  templateUrl: './memorials-detail.component.html',
  styleUrl: './memorials-detail.component.css',
  providers: [DatePipe] // Incluye el DatePipe como proveedor
})
export class MemorialsDetailComponent implements OnInit {

  breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Memorials', url: '/memorials' },
  ];

  // memorialsArticle: Memorials | undefined;

  // constructor(private route: ActivatedRoute, private memorialsService: MemorialsService) {}

  carteleraArticles: Cartelera | undefined;;

  constructor(private route: ActivatedRoute, private carteleraService: CarteleraService, private datePipe: DatePipe) {}

  // ngOnInit() {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.memorialsArticle = this.memorialsService.getMemorialsById(id);
  // }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carteleraService.getCarteleraById(id).subscribe((data: Cartelera) => {
      if (data.tipo === 'memorial') {
        this.carteleraArticles = data;
      }
    });
  }

  getFormattedDate(fecha: string): string {
    // Da formato a la fecha de año/mes/dia
    return this.datePipe.transform(fecha, 'yyyy/MM/dd') || '';
  }

}
