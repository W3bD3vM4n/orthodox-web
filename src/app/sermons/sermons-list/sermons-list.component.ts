import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SermonsService } from "../sermons.service";
import { Sermons } from "../sermons.model";

@Component({
  selector: 'app-sermons-list',
  templateUrl: './sermons-list.component.html',
  styleUrl: './sermons-list.component.css'
})
export class SermonsListComponent implements OnInit {

  sermonsList: Sermons[] = [];

  constructor(private router: Router, private sermonsService: SermonsService) {}

  ngOnInit() {
    this.sermonsList = this.sermonsService.getSermonsList();
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

  openSermons(id: number) {
    this.router.navigate(['/sermons', id]);
  }

}
