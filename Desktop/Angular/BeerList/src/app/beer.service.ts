import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private HttpService: HttpClient) { }

  public getBeers(){
    return this.HttpService.get("https://api.punkapi.com/v2/beers")
}
}
