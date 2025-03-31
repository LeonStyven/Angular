import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/gif.interface';

const GIF_KEY = 'gifs';

const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}'; //Record<string, Gif[]>
  const gifs = JSON.parse(gifsFromLocalStorage);

  console.log(gifs);
  return gifs;
};

@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient); // Inyección de dependencias

  trendingGifs = signal<Gif[]>([]); // Señal que contiene los gifs trending [gif, gif, gif, gif, gif, gif]
  trendingGifsLoading = signal(false); // Señal que indica si se está cargando los gifs trending

  private trendingPage = signal(0); // Señal que indica la página actual de los gifs trending

  trendingGifGroup = computed<Gif[][]>(() => {
    const groups = [];
    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      groups.push(this.trendingGifs().slice(i, i + 3));
    }
    console.log(groups);

    return groups; //[ [gif, gif, gif], [gif, gif, gif], [gif, gif, gif] ]
  });

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage()); // Señal que contiene el historial de búsquedas
  searchhistoryKeys = computed(() => Object.keys(this.searchHistory()));

  // Carga los gifs trending al iniciar el servicio
  constructor() {
    this.loadTrendingGifs();
  }

  //Guardar el historial de búsquedas en el localStorage
  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyString);
  });

  // Carga los gifs trending haciendo una petición HTTP a la API de Giphy
  loadTrendingGifs() {
    if (this.trendingGifsLoading()) return;

    this.trendingGifsLoading.set(true);

    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        // URL de la API de Giphy
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          offset: this.trendingPage() * 20,
        },
      }) //Es necesario realizar una suscripcion para así poder ejecutar y esperar la respuesta del servicio
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data); // Mapea los gifs de la respuesta a un array de Gif
        this.trendingGifs.update((currentGifs) => [...currentGifs, ...gifs]);
        this.trendingGifsLoading.set(false);
        this.trendingPage.update((currentPage) => currentPage + 1);
        console.log(gifs);
      });
  }

  searchGifs(query: string): Observable<Gif[]> {
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
        map((items) => GifMapper.mapGiphyItemsToGifArray(items)),

        //HISTORY
        /* {
          'Goku': [gif1, gif2, gif3],
          'Saitama': [gif1, gif2, gif3],
          'Dragon Ball': [gif1, gif2, gif3],
        };

        Record<String, Gif[]> */

        tap((items) => {
          this.searchHistory.update((history) => ({
            ...history,
            [query.toLowerCase()]: items, //Query hace referencia al valor del input
          }));
        })
      ); //Es necesario realizar una suscripcion para así poder ejecutar y esperar la respuesta del servicio

    /* .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data); // Mapea los gifs de la respuesta a un array de Gif
        console.log('search:', gifs);
      }); */
  }

  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query] ?? [];
  }
}
