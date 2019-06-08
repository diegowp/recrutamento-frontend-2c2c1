import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ClashService } from 'src/app/services/clash.service';
import { ClanDetailModel } from 'src/app/services/models/ClanDetailModel.class';
import { BehaviorSubject } from 'rxjs';
import { PageLoadAnimation } from 'src/app/shared/animation';
import { ClaSearchModel } from 'src/app/services/models/ClaSearchModel.class';

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

  tableContent: ClaSearchModel[] = [];

  constructor( private service: ClashService ) { }

  ngOnInit() {
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
      this.showSearch = true;
      this.tableContent = response;
      console.log( response );
    })
  }

}
