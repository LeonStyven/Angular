import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';

import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient); // Inyección de dependencias
  trendingGifs = signal<Gif[]>([]); // Señal que contiene los gifs trending
  trendingGifsLoading = signal(true); // Señal que indica si se está cargando los gifs trending

  // Carga los gifs trending al iniciar el servicio
  constructor() {
    this.loadTrendingGifs();
  }

  // Carga los gifs trending haciendo una petición HTTP a la API de Giphy
  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        // URL de la API de Giphy
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        },
      }) //Es necesario realizar una suscripcion para así poder ejecutar y esperar la respuesta del servicio
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data); // Mapea los gifs de la respuesta a un array de Gif
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log(gifs);
      });
  }

  searchGifs(query: string) {
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
        // URL de la API de Giphy
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          q: query,
        },
      })
      .pipe(
        map(({ data }) => data),
        map((items) => GifMapper.mapGiphyItemsToGifArray(items))

        //TODO Historial
      ); //Es necesario realizar una suscripcion para así poder ejecutar y esperar la respuesta del servicio

    /* .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data); // Mapea los gifs de la respuesta a un array de Gif
        console.log('search:', gifs);
      }); */
  }
}
