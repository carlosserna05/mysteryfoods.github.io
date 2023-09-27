import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from '../modelo/customer';

const base_url = environment.basePath+'/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {}
  getCustomer(id:any) {
    const endpoint=`${base_url}/name/${id}`;
    return this.http.get<Customer>(endpoint);
  }
  getCustomerByName(name:string){
    const endpoint=`${base_url}/getByName/${name}`;
    return this.http.get<Customer>(endpoint);
  }
  editCustomer(id: any,m_customer:Customer) {
    const endpoint=`${base_url}/update/${id}`;
    return this.http.put<Customer>(endpoint,m_customer);
  }

  addCustomer(m_customer: Customer) {
    const endpoint=`${base_url}/insert`;
    return this.http.post<Customer>(endpoint, m_customer);
  }
}
