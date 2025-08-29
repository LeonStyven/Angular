import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import type { Region } from '../../interfaces/region.type';

@Component({
  selector: 'region-selector',
  imports: [],
  templateUrl: './region-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionSelectorComponent {

  selectedRegion: string = '';

  regions = input<Region[]>([]);
  regionQuery = output<string>();

  selectRegion(region: Region){
    this.selectedRegion = region;
    this.regionQuery.emit(region);

  }

}
