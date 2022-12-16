import { Injectable } from '@angular/core';
import { Config } from 'src/app/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/models/customers/customer';
const baseUrl = 'http://localhost:5295/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http : HttpClient) { }
  getAll(): Observable<Customer[]> {
    debugger
    const apiUrl = baseUrl+'/getall'
    var list = this.http.get<Customer[]>(apiUrl);
    return list;
  }

  get(id: Customer): Observable<any> {
     return this.http.get<Customer>(baseUrl +'/Details/'+id);
    // return this.http.get(`${baseUrl}/Detail/${id}`);
  }
}
