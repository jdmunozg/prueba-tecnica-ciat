import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlagasService {
  urlApi = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAllPlaga() {
    return this.http.get(`${this.urlApi}plaga`);
  }
  getAllZona() {
    return this.http.get(`${this.urlApi}zona`);
  }
  getAllPalmera() {
    return this.http.get(`${this.urlApi}palmera`);
  }
}
