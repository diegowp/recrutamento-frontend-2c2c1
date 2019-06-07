import { Component, OnInit } from '@angular/core';
import { ClashService } from 'src/app/services/clash.service';
import { ClanDetailModel } from 'src/app/services/models/ClanDetailModel.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  clanData: ClanDetailModel = {
    name: '',
    badge: {
      image: '',
    }
  };

  constructor( private service: ClashService ) { }

  ngOnInit() {

    // teste
    // this.service.getClanDetail( '9PJ82CRC' ).subscribe( response => {
    //   this.clanData = response;
    //   console.log( response );
    // } );

    // this.service.searchClas( [] ).subscribe( response => {
    //   console.log( response );  
    // })

  }

}
