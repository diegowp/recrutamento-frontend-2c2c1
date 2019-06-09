import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-tag',
  templateUrl: './search-tag.component.html',
  styleUrls: ['./search-tag.component.scss']
})
export class SearchTagComponent implements OnInit {

  searchTagForm: FormGroup;

  constructor( private fb: FormBuilder, private router: Router ) { }

  ngOnInit() {

    this.searchTagForm = this.fb.group({
      tagName: ['', [Validators.required, Validators.minLength(3)]]
    })

  }

  onSubmit(){
    this.router.navigate(['/detail/', this.searchTagForm.get('tagName').value]);
  }

}
