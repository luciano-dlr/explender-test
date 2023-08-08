import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  private serverUrl = 'http://localhost:9000'; // Cambia la URL según tu configuración

  constructor(private http: HttpClient) { }

  saveToken(token: string): Observable<any> {
    const url = `${this.serverUrl}/save-token`;
    return this.http.post(url, { token });
  }
}
