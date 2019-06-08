import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {

  @Input() show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
