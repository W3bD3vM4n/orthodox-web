import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Cartelera } from "../../models/cartelera.interface";
import { CarteleraService } from "../../services/cartelera.service";

@Component({
  selector: 'app-memorials-list',
  templateUrl: './memorials-list.component.html',
  styleUrl: './memorials-list.component.css',
  providers: [DatePipe] // Incluye el DatePipe como proveedor
})
export class MemorialsListComponent implements OnInit {

  carteleraList: Cartelera[] = [];

  constructor(private router: Router, private carteleraService: CarteleraService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.carteleraService.fetchData().subscribe((data: Cartelera[]) => {
      // console.log('Cartelera-Memorial from API:', data);
      this.carteleraList = data
        .filter(item => item.tipo === 'memorial')
        .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
    });
  }

  getFormattedDate(fecha: string): string {
    // Da formato a la fecha de año/mes/dia
    return this.datePipe.transform(fecha, 'yyyy/MM/dd') || '';
  }

  getSummary(content: string): string {
    // Verifica que el contenido no sobrepase a 200 palabras
    let summary = content.slice(0, 200);

    // Encuentra el ultimo espacio para evitar cortar una palabra
    const lastSpaceIndex = summary.lastIndexOf(' ');

    // Si hay un espacio entre las 200 palabras lo trunca
    if (lastSpaceIndex !== -1) {
        summary = summary.slice(0, lastSpaceIndex);
    }

    // Verifica si el resumen termina con punto sino le agrega tres
    if (!summary.endsWith('.')) {
        summary += '...';
    }

    return summary;
  }

  openMemorials(id: number) {
    this.router.navigate(['/memorials', id]);
  }

}
