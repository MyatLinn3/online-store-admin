import { Injectable } from '@angular/core';
import { AppConstants } from '../utils/app-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private serverPath = AppConstants.serverPath;

  constructor(private httpClient: HttpClient) { }


  newProduct(product: Product) {
    product.availableQuantity = product.totalQuantity;
    let url = this.serverPath + "/api/product/add";
    let tokenHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post(url, JSON.stringify(product), { headers: tokenHeader });
  }


  getProductList() {
    let url = this.serverPath + "/api/product/productList";
    return this.httpClient.get(url);
  }


  deleteProduct(bookId) {
    let url = "http://localhost:8080/api/product/remove";
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post(url, bookId, { headers: header });
  }


  getProduct(productId) {
    let url = "http://localhost:8080/api/product/get/" + productId;
    let header = new HttpHeaders({
      'Content-Type': 'application/json'

    });
    return this.httpClient.get(url, { headers: header });
  }



  editPrdouct(product: Product) {
    let url = "http://localhost:8080/api/product/update";
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpClient.post(url, JSON.stringify(product), { headers: header });
  }
}
