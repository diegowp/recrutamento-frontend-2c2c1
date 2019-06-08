import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ClanDetailModel } from './models/ClanDetailModel.class';
import { ClaSearchModel } from './models/ClaSearchModel.class';

@Injectable({
  providedIn: 'root'
})
export class ClashService {

  constructor( private http: HttpClient ) { }

  getClanDetail( tag: string ): Observable<ClanDetailModel>{
    return this.http.get<ClanDetailModel>(`${environment.api_url}/${tag}`);
  }

  searchClas( options: string ): Observable<ClaSearchModel[]>{
    return this.http.get<ClaSearchModel[]>(`${environment.api_url}/search?${options}`);
  }

}
