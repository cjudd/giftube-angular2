/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GiftubeApiService } from './giftube-api.service';

describe('GiftubeApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiftubeApiService]
    });
  });

  it('should ...', inject([GiftubeApiService], (service: GiftubeApiService) => {
    expect(service).toBeTruthy();
  }));
});
