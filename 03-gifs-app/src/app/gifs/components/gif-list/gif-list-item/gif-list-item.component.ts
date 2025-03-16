import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
})
export class GifListItemComponent {
  imageUrls = input.required<string>(); //Recibe el URL del gif de su componente padre (gif-list) para asignarlo como propiedad a la etiqueta HTML
}
