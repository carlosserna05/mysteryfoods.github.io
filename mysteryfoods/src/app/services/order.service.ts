import { Injectable } from '@angular/core';
import { Order } from '../modelo/order';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const base_url = environment.basePath+'/order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  getOrdersByCustomerId(customerId:any){
    const endpoint=base_url+'/getByCustomerId/'+customerId;
    return this.http.get<Order[]>(endpoint);
  }
  addOrders(order:any){
    const endpoint=base_url+'/insert';
    return this.http.post<Order[]>(endpoint,order);
  }
}
