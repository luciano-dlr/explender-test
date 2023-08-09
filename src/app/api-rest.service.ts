import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  // public url = 'http://localhost:4040'; // Cambia la URL según tu configuración
  public url = 'http://explender.sytes.net:4040'; // Cambia la URL según tu configuración

  constructor(private http: HttpClient) { }

  saveToken = (token:any) => {
    return this.http.post(`${this.url}/save`,{
      token
    })
  }

  sendToken(): Observable<any> {
    console.log('entra token');
    return this.http.post(`${this.url}/send`, {});
  }


}
