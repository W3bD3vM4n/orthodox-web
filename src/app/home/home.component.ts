import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NewsService } from '../news/news.service';
import { News } from '../news/news.model';

import { SermonsService } from "../sermons/sermons.service";
import { Sermons } from "../sermons/sermons.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  sermonsList: Sermons[] = [];
  maxSermonsItems: number = 2; // Limita el número de sermones mostradas

  newsList: News[] = [];
  maxNewsItems: number = 2; // Limita el número de noticias mostradas

  constructor(private router: Router, private sermonsService: SermonsService, private newsService: NewsService) {}

  ngOnInit() {
    this.sermonsList = this.sermonsService.getSermonsList();
    this.newsList = this.newsService.getNewsList();
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

  openNews(id: number) {
    this.router.navigate(['/news', id]);
  }
}
