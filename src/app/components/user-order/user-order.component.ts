import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { OrderDto } from 'src/app/models/order-model-dto';
import { DeleteService } from 'src/app/services/delete.service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {

  orders: OrderDto[] = [];
  quantity: number = 0;

  constructor(private orderService: OrderService, private deleteService: DeleteService) { }

  ngOnInit() {
    this.orderService.findAllOrders().subscribe((orders: any[]) => {
      console.log(orders);
      this.orders = orders;
      this.deleteService.getUserOrders().forEach(userOrder => {
        this.orders = this.orders.filter(order => order.date !== userOrder.date && order.shippingAddress !== userOrder.shippingAddress && order.products !== userOrder.products);
      });
    });
  }

  getTotal(order: OrderDto): number {
    let total: number = 0;
    order.products.forEach(product => {
      total += product.price;
    })
    return total;
  }

  delete(order) {
    this.deleteService.addUserOrder(order);
    this.ngOnInit();
  }
}
