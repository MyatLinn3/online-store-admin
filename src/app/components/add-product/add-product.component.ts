import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product-model';
import { ProductService } from '../../services/product.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AppConstants } from '../../utils/app-constants';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  private newProduct: Product = new Product();
  private productAdded: boolean;
  private categories: { name: string; id: number }[] = AppConstants.categories;
  private targetSize: { size: string; id: number }[] = AppConstants.targetSize;
  constructor(
    private productService: ProductService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.productService.newProduct(this.newProduct).subscribe(
      res => {
        console.log(res)
        this.productAdded = true;
        this.newProduct = new Product();
      },
      error => console.log(error)
    );
  }

  handleFileInput(file: File) {
    let uniqKey = 'pic' + Math.floor(Math.random() * 10000);
    const fileUp = this.storage.upload('/photos/' + uniqKey, file);
    fileUp.then(a => a.ref.getDownloadURL().then(a => {
      this.newProduct.imageUrl = a
      this.newProduct.isAvailable = true
      console.log(a);
    }));
  }

}
