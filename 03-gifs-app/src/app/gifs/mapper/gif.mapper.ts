import { Gif } from '../interfaces/gif.interface';
import { GiphyItem } from '../interfaces/giphy.interfaces';

export class GifMapper {
  // Método que mapea un objeto de tipo GiphyItem a un objeto de tipo Gif
  static mapGiphyItemToGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

  // Método que mapea un array de objetos de tipo GiphyItem a un array de objetos de tipo Gif
  static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
    return items.map(this.mapGiphyItemToGif);
  }
}
