import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product-model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

      private productId : number;
      private product:Product =new Product();
      private productUpdate:boolean;

      constructor(
                  private router:Router,
                  private route:ActivatedRoute,
                  private getProductService:ProductService) { }

      ngOnInit() {
        this.route.params.forEach( (params:Params) =>{
          this.productId = Number.parseInt(params['id'])
        });

        this.getProductService.getProduct(this.productId).subscribe(
          (data:any) =>{
            this.product = data
            console.log(this.product)
          },
          error => {
            console.log(error)
          }
        )
      }

      onSubmit() {
        this.getProductService.editPrdouct(this.product).subscribe(
          data => {
            console.log(data)
            this.productUpdate=true;
          },
          error => console.log(error)
        );
      }

}
