import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { OrderDto } from 'src/app/models/order-model-dto';
import { DeleteService } from 'src/app/services/delete.service';

@Component({
  selector: 'app-monthly-sale',
  templateUrl: './monthly-sale.component.html',
  styleUrls: ['./monthly-sale.component.css']
})
export class MonthlySaleComponent implements OnInit {

  total=0;
  orders: { productName, quantity, date, total }[] = [];
  constructor(private orderService: OrderService,private deleteService:DeleteService) { }

  ngOnInit() {
    this.orderService.findAllOrders().subscribe((orders: OrderDto[]) => {
      let tempProduct:{productName,date} = {productName:'',date:''};
      orders.forEach(orderP => {
        orderP.products.forEach(product => {
          if (this.orders.length !== 0) {
            this.orders.forEach(orderF => {
              if (orderF.productName === product.productName && orderF.date === orderP.date) {
                orderF.quantity += 1;
                orderF.total += product.price;
              } else {
                  if(tempProduct.productName !== product.productName &&  tempProduct.date !==orderP.date){
                  this.orders.push({ productName: product.productName, quantity: 1, date: orderP.date, total: product.price });
                  tempProduct = {productName: product.productName,date:orderP.date};
                }
              }
            })
          } else {
            this.orders.push({ productName: product.productName, quantity: 1, date: orderP.date, total: product.price });
          }
        });
        tempProduct = {productName:'',date:''};
      });
      this.deleteService.getSaleHistorys().forEach(sale => {
        this.orders = this.orders.filter(order => order.date !== sale.date && order.productName !== sale.productName && order.quantity !== sale.quantity && order.total !== sale.quantity);
      });
      this.total = 0;
      this.orders.forEach(order => {
        this.total += order.total;
      });
    });
  }

  delete(history){
    this.deleteService.addSaleHistory(history);
    this.ngOnInit();
  }
}
