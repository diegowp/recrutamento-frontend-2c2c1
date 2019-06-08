import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  advancedFilterForm: FormGroup;

  @Output() response = new EventEmitter();

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {

    this.advancedFilterForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      location: ['BR'],
      minScore: [''],
      minMembers: [''],
      maxMembers: ['']
    })

  }

  onSubmit(){    
    let options: string = '';
    let formValue = this.advancedFilterForm.value;

    for( let value in formValue ){
      formValue[value] != '' ? options += `&${value}=${formValue[value]}` : '';
    }

    this.response.emit( options );
  }

}
