import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  URL = 'https://api-ssl.bitly.com/v4/shorten';

  constructor(private http: HttpClient) { }

  getUrlShort(nombreUrl: string): Observable<any> {
    // Generando constante de token
    // const tokenHeader = new HttpHeaders()
    // generando constante de body del metodo que recibimos
    const body = {
      long_url: nombreUrl
    }
      return this.http.post(this.URL, body).pipe(catchError((error: HttpErrorResponse) => {
      console.log(error);
      return throwError(error);
      }));

  }
}
