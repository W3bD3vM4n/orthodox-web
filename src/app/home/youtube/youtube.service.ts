import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey = 'AIzaSyBj-ibm4x1jO20rjfPvR4TCjuST_P4Recs';
  private baseUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(private http: HttpClient) {}

  // Obtiene el ultimo video live del canal
  getLiveVideoId(channelId: string): Observable<any> {
    const url = `${this.baseUrl}/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${this.apiKey}`;
    return this.http.get(url);
  }

  // Obtiene el ultimo video live del playlist
  getLatestVideoFromPlaylist(playlistId: string): Observable<any> {
    const url = `${this.baseUrl}/playlistItems?part=snippet&maxResults=1&playlistId=${playlistId}&key=${this.apiKey}`;
    return this.http.get(url);
  }
}
