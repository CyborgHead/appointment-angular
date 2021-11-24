import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    //const hardCodedToken = 'E9658970-8A7E-4821-9335-6DCEAA3AC061';

    const requestWithAuth = request.clone({
        setHeaders: {
            'Content-Type': 'application/json',
            'key': 'E9658970-8A7E-4821-9335-6DCEAA3AC061',
            //'Referer': 'https://6oen8x7qoj.execute-api.eu-north-1.amazonaws.com/Prod/index.html',
            //'Sec-Fetch-Site': 'same-origin'
        }
    });

    return next.handle(requestWithAuth);
  }
}
