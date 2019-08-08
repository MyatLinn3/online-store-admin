import { Injectable } from '@angular/core';
import { OrderDto } from '../models/order-model-dto';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  private userOrders: OrderDto[] = [];
  private saleHistorys: { productName, quantity, date, total }[] = [];

  constructor() { }

  public getUserOrders(){
    return [...this.userOrders];
  }

  public getSaleHistorys(){
    return [...this.saleHistorys];
  }

  public addUserOrder(order: OrderDto){
    this.userOrders.push(order);
  }

  public addSaleHistory(sale){
    this.saleHistorys.push(sale);
  }
}
