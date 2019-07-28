import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product-model';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

    private product:Product=new Product();
    private productId:number;



    constructor(private getProductService:ProductService,
                private router:Router,
                private route:ActivatedRoute) { }

    ngOnInit() {
      this.route.params.forEach((params:Params) =>{
        this.productId=Number.parseInt(params['id']);
      });

      this.getProductService.getProduct(this.productId).subscribe(
        (data:any)=>{ this.product = data},
        error =>{
          console.log(error)
        }
      )
    }

    onSelect(p: Product) {
      console.log(p)
      this.router.navigate(['/editProduct',this.productId])
    }

}
