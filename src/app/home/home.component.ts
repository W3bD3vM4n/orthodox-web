import { Component, OnInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { EventsService } from "../events/events.service";
import { Events } from "../events/events.model";
import { MemorialsService } from "../memorials/memorials.service";
import { Memorials } from "../memorials/memorials.model";

import { YoutubeService } from "./youtube/youtube.service";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Quotes } from "../home/quotes/quotes.model";
import { QuotesService } from "../home/quotes/quotes.service";
import { GalleryItem, ImageItem } from 'ng-gallery';

import APlayer from 'aplayer';
import { parseStringPromise } from 'xml2js';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  eventsList: Events[] = [];
  maxEventsItems: number = 2; // Limita el número de eventos mostrados
  memorialsList: Memorials[] = [];
  maxMemorialsItems: number = 1; // Limita el número de memoriales mostrados

  liveVideoId: string | null = null;
  safeLiveVideoUrl: SafeResourceUrl | null = null;
  channelId:string = 'UCxge6zEbxqRqpYq_RqTSLXQ';
  livePlaylistId:string = 'UU' + this.channelId.substring(2);

  quotes: Quotes[] = [];
  dailyQuote: Quotes | null = null;

  images: GalleryItem[] = [];

  private feedUrl = 'https://feed.podbean.com/lightinsoul87/feed.xml';


  constructor(private router: Router, private eventsService: EventsService, private memorialsService: MemorialsService, private youtubeService: YoutubeService, private sanitizer: DomSanitizer, private quotesService: QuotesService, private http: HttpClient, private elRef: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.eventsList = this.eventsService.getEventsList();
    this.memorialsList = this.memorialsService.getMemorialsList();

    this.fetchLiveVideoId();

    this.quotes = this.quotesService.getQuotes();
    this.dailyQuote = this.getRandomQuote();

    this.loadGalleryItems();

    this.fetchAndInitializePlayer();
  }


  // EVENTOS - MEMORIALES
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

  openMemorials(id: number) {
    this.router.navigate(['/memorials', id]);
  }


  // YOUTUBE LIVE
  // Obtiene el ID del video
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


  // PENSAMIENTO DEL DÍA
  // Obtiene una citación al azar dependiendo el día
  private getRandomQuote(): Quotes {
    const today = new Date();
    const seed = today.getFullYear() * 1000 + today.getMonth() * 31 + today.getDate();
    const index = seed % this.quotes.length;
    return this.quotes[index];
  }


  // GALERIA
  // Fotos de muestra
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


  // RADIO 24/7
  // Inicializa el reproductor
  private async fetchAndInitializePlayer() {
    try {
      const rssFeed: string = await firstValueFrom(this.http.get(this.feedUrl, { responseType: 'text' }));
      const result = await parseStringPromise(rssFeed);

      // Extract global cover image from the channel
      const globalCoverUrl = result.rss.channel[0]['itunes:image'] ? result.rss.channel[0]['itunes:image'][0].$.href : 'assets/images/home/button-position3.png';

      // Extract episodes, passing the global cover image URL
      const episodes = this.extractEpisodes(result.rss.channel[0].item, globalCoverUrl);
    this.initializeAPlayer(episodes);
    } catch (error) {
      console.error('Error fetching podcast playlist:', error);
    }
  }

  // Extract episode details from the RSS items
  private extractEpisodes(items: any[], globalCoverUrl: string): any[] {
    const episodes = items.map(item => ({
      name: item.title ? item.title[0] : 'Unknown Title',
      artist: item['itunes:author'] ? item['itunes:author'][0] : 'Unknown Artist',
      url: item.enclosure && item.enclosure[0].$ && item.enclosure[0].$.url ? item.enclosure[0].$.url : '',
      cover: globalCoverUrl, // Use the global cover image for each episode
      pubDate: item.pubDate ? new Date(item.pubDate[0]) : new Date(0)
    }));

    // Sort episodes by publication date in ascending order (oldest first)
    episodes.sort((a, b) => a.pubDate.getTime() - b.pubDate.getTime());

    return episodes;
  }

  private async initializeAPlayer(episodes: any[]) {
    if (isPlatformBrowser(this.platformId)) { // Check if running in the browser
      const APlayer = (await import('aplayer')).default; // Dynamically import APlayer
      const player = new APlayer({
        container: this.elRef.nativeElement.querySelector('#aplayer'),
        autoplay: false,
        loop: 'all', // Loops through all tracks in the playlist
        listFolded: true, // Keeps playlist folded initially
        order: 'random', // Play the tracks in random order
        listMaxHeight: 0, // Hides the playlist list
        audio: episodes // Pass the dynamically generated episodes
      });
    }
  }

}
