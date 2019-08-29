import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyCustomer } from './customerdetails/customerdetails';

@Injectable({
  providedIn: 'root'
})
export class CustomerdetailsService {
private url: string = "../assets/customerdetails.json";
  constructor(private http:HttpClient) { }
  getCustomersDetails():Observable<MyCustomer[]>{
    return this.http.get<MyCustomer[]>(this.url)
  }
}
