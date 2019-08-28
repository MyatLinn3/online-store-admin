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
    return JSON.parse(localStorage.getItem('orders'));
  }

  public getSaleHistorys() {
    return JSON.parse(localStorage.getItem('sales'));;
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
