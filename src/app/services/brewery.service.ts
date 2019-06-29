import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Brewery } from '../models/Brewery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  url: string = "https://api.openbrewerydb.org/breweries/";
  searchapi: string = "search?query=";


  constructor(private http:HttpClient) { }

  getBreweries(state: string): Observable<Brewery[]> {
    return this.http.get<Brewery[]>(this.url + this.searchapi + state + "&sort=state,-name");
  }

  getAllBreweries(): Observable<Brewery[]> {
    return this.http.get<Brewery[]>(this.url);
  }
}
