import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from "../events.service";
import { Events } from "../events.model";

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

  eventsArticle: Events | undefined;;

  constructor(private route: ActivatedRoute, private eventsService: EventsService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventsArticle = this.eventsService.getEventsById(id);
  }

}
