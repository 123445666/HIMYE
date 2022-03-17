import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Company } from 'src/app/models/company';
import { Employ } from 'src/app/models/employ';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-table-data-form',
  templateUrl: './table-data-form.component.html',
  styleUrls: ['./table-data-form.component.css'],
  providers: [CompanyService],
})
export class TableDataFormComponent implements OnInit {
  company: Company;
  employs: Employ[];
  numb: Number;

  constructor(
    private route: ActivatedRoute, private _companyService: CompanyService
  ) { }

  ngOnInit() {
    this.company = { name : "", domain : "" }
    this.company.name = this.route.snapshot.params['name'];
    this.getEmployes();
  }



  getEmployes() {
    this._companyService.getEmploys(this.company).subscribe(
      response => {
        this.employs = response;
      },
      error => {
        console.log(<any>error);
      });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
