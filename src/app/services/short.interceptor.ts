import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = '34d7b5190118ae77c87f22742a3b0e895c3b6b4d';

    request = request.clone({ setHeaders:{ Authorization: 'Bearer ' + TOKEN } })
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      console.log(error);
      return throwError(error);
    }));
  }
}
