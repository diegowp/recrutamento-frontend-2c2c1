import { Component, OnInit, Input } from '@angular/core';
import { ClaSearchModel } from 'src/app/services/models/ClaSearchModel.class';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableData: ClaSearchModel;
  @Input() headers: Array<Object>;

  constructor() { }

  ngOnInit() {
  }

}
