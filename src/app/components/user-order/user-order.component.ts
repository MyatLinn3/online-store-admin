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
  quantity: number = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.findAllOrders().subscribe((orders: any[]) => {
      this.orders = orders;
    });
  }

  getTotal(order: OrderDto): number {
    let total: number = 0;
    order.products.forEach(product => {
      total += product.price;
    })
    return total;
  }

  getproducts() {

  }
}
