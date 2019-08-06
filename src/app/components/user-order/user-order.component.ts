import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { OrderDto } from 'src/app/models/order-model-dto';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {

  orders: OrderDto[] = [];
  total: number = 0;
  quantity: number = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.findAllOrders().subscribe((orders: any[]) => {
      this.orders = orders;
    });
  }

  getTotal(order: OrderDto): number {
    order.products.forEach(product => {
      this.total += product.price;
    })
    return this.total;
  }

  getproducts() {
    
  }
}
