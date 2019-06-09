import { Component, OnInit } from '@angular/core';
import { ClanDetailModel } from 'src/app/services/models/ClanDetailModel.class';
import { ActivatedRoute, Router } from '@angular/router';
import { ClashService } from 'src/app/services/clash.service';

@Component({
  selector: 'app-cla-detail',
  templateUrl: './cla-detail.component.html',
  styleUrls: ['./cla-detail.component.scss']
})
export class ClaDetailComponent implements OnInit {

  loading: boolean = false;  
  claData: ClanDetailModel = {
    name: 'Clã Name',
    tag: 'Tag',
    badge: {image: ''},
    description: 'Clã Description',
    score: 0,
    members: [{}],
  };

  constructor( private actRouter: ActivatedRoute, private service: ClashService, private router: Router ) {
  }

  ngOnInit() {

    this.loading = true;

    let claTag = this.actRouter.snapshot.paramMap.get('tag');

    if( claTag != undefined ){
      this.service.getClanDetail( claTag ).subscribe( response => {
        this.claData = response;
        this.loading = false;
      }, err => {
        this.loading = false;
        sessionStorage.setItem('error', 'Não foi localizado nenhum item.');
        this.router.navigate(['/error']);
      });
    }

  }

}
