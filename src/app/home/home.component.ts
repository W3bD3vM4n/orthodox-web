import { Component, OnInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

import { Cartelera } from "../models/cartelera.interface";
import { CarteleraService } from "../services/cartelera.service";

import { YoutubeService } from "./youtube/youtube.service";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { PensamientoDia } from "../models/pensamiento-dia.interface";
import { PensamientoDiaService } from "../services/pensamiento-dia.service";

import { GalleryItem, ImageItem } from 'ng-gallery';

import APlayer from 'aplayer';
import { parseStringPromise } from 'xml2js';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [DatePipe] // Incluye el DatePipe como proveedor
})
export class HomeComponent implements OnInit {

  anunciosList: Cartelera[] = [];
  maxAnunciosItems: number = 2; // Limita el número de eventos mostrados

  memorialsList: Cartelera[] = [];
  maxMemorialsItems: number = 1; // Limita el número de memoriales mostrados

  liveVideoId: string | null = null;
  safeLiveVideoUrl: SafeResourceUrl | null = null;
  channelId:string = 'UCxge6zEbxqRqpYq_RqTSLXQ';
  livePlaylistId:string = 'UU' + this.channelId.substring(2);

  pensamientoDiaFromAPI: PensamientoDia[] = [];
  pensamientoDia: PensamientoDia | null = null;

  images: GalleryItem[] = [];

  private feedUrl = 'https://feed.podbean.com/lightinsoul87/feed.xml';


  constructor(private router: Router, private carteleraService: CarteleraService, private datePipe: DatePipe, private youtubeService: YoutubeService, private sanitizer: DomSanitizer, private pensamientoDiaService: PensamientoDiaService, private http: HttpClient, private elRef: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.carteleraService.fetchData().subscribe((data: Cartelera[]) => {
      // console.log('Cartelera from API:', data);
      this.anunciosList = data
        .filter(item => item.tipo === 'anuncio')
        .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());

      this.memorialsList = data
        .filter(item => item.tipo === 'memorial')
        .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
    });

    this.fetchLiveVideoId();

    this.pensamientoDiaService.fetchData().subscribe((data: PensamientoDia[]) => {
      // console.log('PensamientoDia from API:', data);
      this.pensamientoDiaFromAPI = data;

      this.pensamientoDia = this.getRandomQuote();
    })

    this.loadGalleryItems();
    this.fetchAndInitializePlayer();
  }


  // EVENTOS - MEMORIALES
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

  openEvents(id: number) {
    this.router.navigate(['/events', id]);
  }

  openMemorials(id: number) {
    this.router.navigate(['/memorials', id]);
  }


  // YOUTUBE LIVE
  // Obtiene el ID del video
  fetchLiveVideoId(): void {
    const lastFetchDate = new Date(localStorage.getItem('lastFetchDate') || 0);
    const currentSunday = this.getPreviousSunday();
    const storedVideoId = localStorage.getItem('liveVideoId');

    if (storedVideoId && lastFetchDate.getTime() === currentSunday.getTime()) {
      // Utiliza la identificación del video almacenado si es válida para la semana actual
      this.liveVideoId = storedVideoId;
      this.safeLiveVideoUrl = this.sanitizeUrl(this.liveVideoId);
    } else {
      // Obtiene nuevos datos de video live ya que los datos almacenados están desactualizados
      this.youtubeService.getLiveVideoId(this.channelId).subscribe((data: any) => {
        if (data.items && data.items.length) {
          // Video "Live" encontrado
          this.liveVideoId = data.items[0].id.videoId;
          // Crea un URL seguro para el video live
          this.safeLiveVideoUrl = this.sanitizeUrl(this.liveVideoId);

          // Almacena la identificación del video y la fecha del domingo actual en localStorage
          localStorage.setItem('liveVideoId', this.liveVideoId || '');
          localStorage.setItem('lastFetchDate', currentSunday.toISOString());
        } else {
          // Video "Live" no encontrado
          this.fetchLatestVideoFromLivePlaylist();
        }
      });
    }
  }

  // Ayuda a obtener la fecha del domingo más reciente
  private getPreviousSunday(): Date {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 para domingo, 6 para sábado
    const daysSinceSunday = dayOfWeek; // Diferencia de días desde hoy hasta el último domingo
    const lastSunday = new Date(now.setDate(now.getDate() - daysSinceSunday));
    lastSunday.setHours(0, 0, 0, 0); // Establece la hora a medianoche para mantener coherencia
    return lastSunday;
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
  private getRandomQuote(): PensamientoDia | null {

    const today = new Date();
    const seed = today.getFullYear() * 1000 + today.getMonth() * 31 + today.getDate();
    const index = seed % this.pensamientoDiaFromAPI.length;

    return this.pensamientoDiaFromAPI[index];
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
      // ... más items
    ];
  }


  // RADIO 24/7
  // Inicializa el reproductor
  private async fetchAndInitializePlayer() {
    try {
      const rssFeed: string = await firstValueFrom(this.http.get(this.feedUrl, { responseType: 'text' }));
      const result = await parseStringPromise(rssFeed);

      // Extrae la portada global del canal
      const globalCoverUrl = result.rss.channel[0]['itunes:image'] ? result.rss.channel[0]['itunes:image'][0].$.href : 'assets/images/home/button-position3.png';

      // Extrae los episodios, pasando el URL de la portada global
      const episodes = this.extractEpisodes(result.rss.channel[0].item, globalCoverUrl);
    this.initializeAPlayer(episodes);
    } catch (error) {
      console.error('Error fetching podcast playlist:', error);
    }
  }

  // Extrae detalles del episodio mediante RSS
  private extractEpisodes(items: any[], globalCoverUrl: string): any[] {
    const episodes = items.map(item => ({
      name: item.title ? item.title[0] : 'Unknown Title',
      artist: item['itunes:author'] ? item['itunes:author'][0] : 'Unknown Artist',
      url: item.enclosure && item.enclosure[0].$ && item.enclosure[0].$.url ? item.enclosure[0].$.url : '',
      cover: globalCoverUrl, // Utiliza la portada global para cada episodio
      pubDate: item.pubDate ? new Date(item.pubDate[0]) : new Date(0)
    }));

    // Ordena episodios por fecha de publicación (el más antiguo primero)
    episodes.sort((a, b) => a.pubDate.getTime() - b.pubDate.getTime());

    return episodes;
  }

  private async initializeAPlayer(episodes: any[]) {
    if (isPlatformBrowser(this.platformId)) { // Comprueba si se ejecuta en el navegador
      const APlayer = (await import('aplayer')).default; // Dinamicamente importa APlayer
      const player = new APlayer({
        container: this.elRef.nativeElement.querySelector('#aplayer'),
        autoplay: false,
        loop: 'all', // Recorre todas las pistas de la lista de reproducción
        listFolded: true, // Mantiene la lista de reproducción plegada inicialmente
        order: 'random', // Reproduce las pistas en orden aleatorio
        listMaxHeight: 0, // Oculta la lista de reproducción
        audio: episodes // Pasa los episodios generados dinámicamente
      });
    }
  }

}
