import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  advancedFilterForm: FormGroup;
  
  loading: boolean = false;

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {

    this.advancedFilterForm = this.fb.group({
      claName: ['', [Validators.required, Validators.minLength(3)]],
      location: ['BR'],
      minScore: [''],
      minMembers: [''],
      maxMembers: ['']
    })

  }

  onSubmit(){
    this.loading = true;
    console.log( this.advancedFilterForm.value );
  }

}
