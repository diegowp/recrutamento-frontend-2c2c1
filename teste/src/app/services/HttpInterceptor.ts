import { Injectable, NgModule } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {
  
  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    const dupReq = req.clone({
      headers: req.headers.set('Authorization', environment.api_token),
    });
    return next.handle(dupReq);
  }

}


@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})


export class Interceptor {}