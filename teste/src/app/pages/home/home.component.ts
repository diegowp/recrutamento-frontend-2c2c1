import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ClashService } from 'src/app/services/clash.service';
import { ClanDetailModel } from 'src/app/services/models/ClanDetailModel.interface';
import { BehaviorSubject } from 'rxjs';
import { PageLoadAnimation } from 'src/app/shared/animation';

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

  constructor( private service: ClashService ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.loadPage.next('show');
    }, 200);
  }

}
