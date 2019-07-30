import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product-model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {AppConstants} from '../../utils/app-constants';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

      private productId : number;
      private product:Product =new Product();
      private productUpdate:boolean;
      private categories :{ name: string; id: number }[] =AppConstants.categories;
      private targetSize :{ size: string; id: number }[] =AppConstants.targetSize;

      constructor(private storage:AngularFireStorage,
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

  handleFileInput(file:File){
    let uniqKey = 'pic' + Math.floor(Math.random()* 10000);
    const fileUp= this.storage.upload('/photos/'+uniqKey,file);
    fileUp.then( a => a.ref.getDownloadURL().then(a => {this.product.imageUrl=a
      console.log(a);
    }));
  }

}
