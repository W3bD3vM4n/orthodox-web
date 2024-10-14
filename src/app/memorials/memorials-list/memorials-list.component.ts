import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemorialsService } from "../memorials.service";
import { Memorials } from "../memorials.model";

@Component({
  selector: 'app-memorials-list',
  templateUrl: './memorials-list.component.html',
  styleUrl: './memorials-list.component.css'
})
export class MemorialsListComponent implements OnInit {

  memorialsList: Memorials[] = [];

  constructor(private router: Router, private memorialsService: MemorialsService) {}

  ngOnInit() {
    this.memorialsList = this.memorialsService.getMemorialsList();
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
