import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NgxVerifyIsServerSideService {

  constructor(
      @Inject(PLATFORM_ID) private _platformId: Object,
  ) { }

  get isServerSide(): boolean {

    return !isPlatformBrowser(this._platformId);
  }
}
