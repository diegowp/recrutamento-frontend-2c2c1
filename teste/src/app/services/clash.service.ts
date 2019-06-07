import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ClanDetailModel } from './models/ClanDetailModel.interface';

@Injectable({
  providedIn: 'root'
})
export class ClashService {

  constructor( private http: HttpClient ) { }

  getClanDetail( tag: string ): Observable<ClanDetailModel>{
    return this.http.get<ClanDetailModel>(`${environment.api_url}/${tag}`);
  }

  searchClas( options: Array<string> ): Observable<any>{
    return this.http.get<any>(`${environment.api_url}/search?name=Brasil`);
  }

}
