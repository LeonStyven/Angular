import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollStateService {
  trendingScrollState = signal(0);

  /* pagesScrollState: Record<string, number> = {
    'Page1' : 1000,
    'Page2' : 0,
    'Page3' : 564,
    'Page4' : 344,
    'Page5' : 2323,
  } */
}
