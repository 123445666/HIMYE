import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'input-data-form',
  templateUrl: './input-data-form.component.html',
  styleUrls: ['./input-data-form.component.css'],
  providers: [CompanyService],
})
export class InputDataFormComponent implements OnInit {
  submitted = false;
  companyForm = this.formBuilder.group({
    name: ''
  });

  company = {name: 'Dr.'};

  constructor(
    private _companyService: CompanyService, private router: Router, private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit()
  {

  }

  onSubmit()
  {
  	this.submitted = true;

    this._companyService.getEmploy(this.companyForm.value).subscribe(
      response=>{
        let path = '/';
	      this.router.navigate([path]);
      },
      error=>{
        console.log(<any>error);
      });
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
