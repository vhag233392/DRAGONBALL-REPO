import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DragonBServiceService {

  private apiUrl = 'https://dragonball-api.com/api/characters?limit=10'

  constructor(private http: HttpClient) { }

  obtenerPersonajes(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
