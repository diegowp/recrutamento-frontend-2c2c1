import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ClashService } from 'src/app/services/clash.service';
import { ClanDetailModel } from 'src/app/services/models/ClanDetailModel.class';
import { BehaviorSubject } from 'rxjs';
import { PageLoadAnimation } from 'src/app/shared/animation';
import { ClaSearchModel } from 'src/app/services/models/ClaSearchModel.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: PageLoadAnimation
})
export class HomeComponent implements OnInit, AfterViewInit {

  loadPage = new BehaviorSubject('hide');
  _loadPage = this.loadPage.asObservable();
  
  clanData: ClanDetailModel = {
    name: '',
    badge: {
      image: '',
    }
  };

  loading: boolean = false;
  showSearch: boolean = false;
  hasError: string = '';

  tableContent: ClaSearchModel[] = [];

  constructor( private service: ClashService, private router: Router ) { }

  ngOnInit() {
    if( this.router.url == '/error' ){
      this.hasError = sessionStorage.getItem('error');
      sessionStorage.removeItem('error');
    }
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.loadPage.next('show');
    }, 200);
  }

  advancedSearch( searchOptions: any ){
    this.loading = true;

    this.service.searchClas( searchOptions ).subscribe( response => {
      this.loading = false;

      if( response.length == 0 ){        
        this.hasError = 'Não foi localizado nenhum item.';
      }else{
        this.showSearch = true;
        this.tableContent = response;
      }

      console.log( response );
    }, err => {
      this.loading = false;
      this.hasError = 'Não foi localizado nenhum item.';
    });
  }

}
