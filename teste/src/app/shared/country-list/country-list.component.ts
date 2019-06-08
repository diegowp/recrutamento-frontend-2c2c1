import { Component, OnInit, Input } from '@angular/core';
import { ClashService } from 'src/app/services/clash.service';
import { CountryList } from 'src/app/services/county-list';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countryList = CountryList;

  @Input() itemControl: FormControl;

  constructor( private service: ClashService ) { }

  ngOnInit() {
  }

}
