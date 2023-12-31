import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  // public url = 'http://localhost:4040'; // Cambia la URL según tu configuración
  // public url = 'http://explender.sytes.net:4040'; // Cambia la URL según tu configuración
  // NgRok
     public url = 'https://7cfe-2803-9800-b882-7eef-2533-22f6-3f21-6d97.ngrok-free.app'

  constructor(private http: HttpClient) { }

  saveToken = (token:any) => {
    console.log('soy tu token guardado',token)
    return this.http.post(`${this.url}/save`,{
      token
    })

  }

  sendToken(): Observable<any> {
    console.log('entra token');
    return this.http.post(`${this.url}/send`, {});
  }


}
