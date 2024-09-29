import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SermonsService } from "../sermons/sermons.service";
import { Sermons } from "../sermons/sermons.model";

import { YoutubeService } from "./youtube/youtube.service";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { EventsService } from "../events/events.service";
import { Events } from "../events/events.model";

import { Quotes } from "../home/quotes/quotes.model";
import { QuotesService } from "../home/quotes/quotes.service";
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  sermonsList: Sermons[] = [];
  maxSermonsItems: number = 2; // Limita el número de sermones mostrados

  liveVideoId: string | null = null;
  safeLiveVideoUrl: SafeResourceUrl | null = null;
  channelId:string = 'UCxge6zEbxqRqpYq_RqTSLXQ';
  livePlaylistId:string = 'UU' + this.channelId.substring(2);

  eventsList: Events[] = [];
  maxEventsItems: number = 2; // Limita el número de eventos mostrados

  quotes: Quotes[] = [];
  dailyQuote: Quotes | null = null;

  images: GalleryItem[] = [];

  constructor(private router: Router, private sermonsService: SermonsService, private youtubeService: YoutubeService, private sanitizer: DomSanitizer, private eventsService: EventsService, private quotesService: QuotesService) {}

  ngOnInit(): void {
    this.sermonsList = this.sermonsService.getSermonsList();
    this.fetchLiveVideoId();
    this.eventsList = this.eventsService.getEventsList();

    this.quotes = this.quotesService.getQuotes();
    this.dailyQuote = this.getRandomQuote();

    this.loadGalleryItems();
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

  // Obtiene el ID del video usando el servicio de YouTube
  fetchLiveVideoId(): void {
    this.youtubeService.getLiveVideoId(this.channelId).subscribe((data: any) => {
      if (data.items && data.items.length) {
        // Video "Live" encontrado
        this.liveVideoId = data.items[0].id.videoId;
        // Crea un URL seguro para el video live
        this.safeLiveVideoUrl = this.sanitizeUrl(this.liveVideoId);
      } else {
        // Video "Live" no encontrado
        this.fetchLatestVideoFromLivePlaylist();
      }
    });
  }

  // Obtiene el ultimo video de la playlist "Live"
  fetchLatestVideoFromLivePlaylist(): void {
    this.youtubeService.getLatestVideoFromPlaylist(this.livePlaylistId).subscribe((data: any) => {
      if (data.items && data.items.length) {
        this.liveVideoId = data.items[0].snippet.resourceId.videoId;
        // Crea un URL seguro para el video
        this.safeLiveVideoUrl = this.sanitizeUrl(this.liveVideoId);
      } else {
        console.log('No videos found in the live playlist.');
      }
    });
  }

  // Limpia el URL del video
  private sanitizeUrl(videoId: string | null): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }

  openEvents(id: number) {
    this.router.navigate(['/events', id]);
  }

  // Obtiene una citación al azar dependiendo el día
  private getRandomQuote(): Quotes {
    const today = new Date();
    const seed = today.getFullYear() * 1000 + today.getMonth() * 31 + today.getDate();
    const index = seed % this.quotes.length;
    return this.quotes[index];
  }

  // Fotos de muestra de la galeria
  loadGalleryItems(): void {
    this.images = [
      new ImageItem({
        src: 'assets/images/home/gallery-thumbnail/2023-05-04_f0-main2.jpg',
        thumb: 'assets/images/home/gallery-thumbnail/2023-05-04_f0-main2.jpg'
      }),
      new ImageItem({
        src: 'assets/images/home/gallery-thumbnail/2023-09-19_f0-main2.jpg',
        thumb: 'assets/images/home/gallery-thumbnail/2023-09-19_f0-main2.jpg'
      }),
      new ImageItem({
        src: 'assets/images/home/gallery-thumbnail/2024-01-11_f2-main2.jpg',
        thumb: 'assets/images/home/gallery-thumbnail/2024-01-11_f2-main2.jpg'
      }),
      new ImageItem({
        src: 'assets/images/home/gallery-thumbnail/2024-01-11_f3-main2.jpg',
        thumb: 'assets/images/home/gallery-thumbnail/2024-01-11_f3-main2.jpg'
      }),
      new ImageItem({
        src: 'assets/images/home/gallery-thumbnail/2024-01-27_f1-main2.jpg',
        thumb: 'assets/images/home/gallery-thumbnail/2024-01-27_f1-main2.jpg'
      }),
      new ImageItem({
        src: 'assets/images/home/gallery-thumbnail/2024-07-10_f0-main2.jpg',
        thumb: 'assets/images/home/gallery-thumbnail/2024-07-10_f0-main2.jpg'
      }),
      new ImageItem({
        src: 'assets/images/home/gallery-thumbnail/2024-09-23_f3-main2.jpg',
        thumb: 'assets/images/home/gallery-thumbnail/2024-09-23_f3-main2.jpg'
      }),
      // ... more items
    ];
  }

}
