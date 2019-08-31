import { Injectable } from '@angular/core';
import { OrderDto } from '../models/order-model-dto';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  private userOrders: OrderDto[] = [];
  private saleHistorys: { productName, quantity, date, total }[] = [];

  constructor() {
    if (localStorage.getItem('orders'))
      this.userOrders = JSON.parse(localStorage.getItem('orders'));
    if (localStorage.getItem('sales'))
      this.userOrders = JSON.parse(localStorage.getItem('sales'));
  }

  public getUserOrders() {
    if (localStorage.getItem('orders'))
      return JSON.parse(localStorage.getItem('orders'));
    else
      return [];
  }

  public getSaleHistorys() {
    if (localStorage.getItem('sales'))
      return JSON.parse(localStorage.getItem('sales'));
    else
      return [];
  }

  public addUserOrder(order: OrderDto) {
    this.userOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(this.userOrders));
  }

  public addSaleHistory(sale) {
    this.saleHistorys.push(sale);
    localStorage.setItem('sales', JSON.stringify(this.saleHistorys));
  }
}
