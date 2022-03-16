import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company';

@Injectable()
export class CompanyService{
    items: Company[] = [];
    public url : string;
    constructor(
        public _http: HttpClient
    ){
        this.url='http://localhost:3000';
    }

    getEmploy(company: Company): Observable<any>{
        let params=JSON.stringify(company);
        console.log(params)
        let headers=new HttpHeaders()
        .set('Content-Type', 'application/json')
        return this._http.get(this.url+'/company/');
    }
}
