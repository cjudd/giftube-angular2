import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GiftubeApiService {

  baseUrl: string;

  constructor(private http: Http) { 
  	this.baseUrl = "https://6ry0hpz9vk.execute-api.us-west-1.amazonaws.com/cmjDev"
  }

  fetchGifs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/gifs`)
        .map(response => response.json());  	
  }

}
