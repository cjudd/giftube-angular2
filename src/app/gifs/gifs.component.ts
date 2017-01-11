import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GiftubeApiService } from '../giftube-api.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  gifs;

  constructor(private _giftubeApiService: GiftubeApiService) { }

  ngOnInit() {
  	this._giftubeApiService.fetchGifs().subscribe(
  		gifs => this.gifs = gifs,
  		error => console.log('Error fetching gifs'));
  }

}
