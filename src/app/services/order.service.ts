import { Injectable } from '@angular/core';
import { AppConstants } from '../utils/app-constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private serverUrl = AppConstants.serverPath + '/api/order';

  constructor(private http:HttpClient) { }

  findAllOrders() {
    return this.http.get(this.serverUrl+'/orders');
  }
}
