import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


import { BikeInterface } from '../../models/bike-interface';


@Injectable({
  providedIn: 'root'
})
export class BikeService {

  baseURL = environment.mainURL; // Main URL API
  page = 1;                      // Page
  per_page = 100;                // Count bikes
  location = 'berlin';           // Capital
  distance = 10;                 // Distance in miles
  stolenness = 'stolen';
  bikeURL = `${this.baseURL}/search?page=${this.page}&per_page=${this.per_page}&location=${this.location}&distance=${this.distance}&stolenness=${this.stolenness}`

  constructor(
    private http: HttpClient
  ) { }

  getAllBikes() {
    return this.http.get<BikeInterface>(`${this.bikeURL}`);
  }
  
}
