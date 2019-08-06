import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-monthly-sale',
  templateUrl: './monthly-sale.component.html',
  styleUrls: ['./monthly-sale.component.css']
})
export class MonthlySaleComponent implements OnInit {

  constructor(private orderService:OrderService) { }

  ngOnInit() {
  }


}
