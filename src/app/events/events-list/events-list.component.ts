import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from "../events.service";
import { Events } from "../events.model";

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent implements OnInit {

  eventsList: Events[] = [];

  constructor(private router: Router, private eventsService: EventsService) {}

  ngOnInit() {
    this.eventsList = this.eventsService.getEventsList();
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

  openEvents(id: number) {
    this.router.navigate(['/events', id]);
  }

}
