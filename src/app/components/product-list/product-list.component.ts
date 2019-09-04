import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product-model';
import { ProductService } from '../../services/product.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private selectedProduct: Product;
  private checked: boolean;
  private productList: Product[];
  private allChecked: boolean;
  private removeBookList: Product[] = new Array();
  private check: boolean;
  constructor(
    private router: Router,
    private productService: ProductService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProductList().subscribe(
      (data: any) => {
        console.log(data),
        this.productList = data;
        this.productList = this.productList.sort((a,b) => new Date(b.date) - new Date(a.date) );
        this.check = this.productList.length > 0 ? false : true;
      },
    );
  }

  updateSelected(checked: boolean) {
    if (checked) {
      this.allChecked = true;
      this.removeBookList = this.productList.slice();
    } else {
      this.allChecked = false;
      this.removeBookList = [];
    }
  }

  updateRemoveBookList(checked: boolean, product: Product) {
    if (checked) {
      this.removeBookList.push(product)
    } else {
      this.removeBookList.splice(this.removeBookList.indexOf(product), 1);
    }
  }

  onSelect(product: Product) {
    this.selectedProduct = product;
    console.log(product);
    this.router.navigate(['/viewProduct', this.selectedProduct.id]);
  }

  removeSelectedBooks() {
    if (this.removeBookList.length > 0) {
      let dialog = this.dialog.open(DialogResultExampleDialog);
      dialog.afterClosed().subscribe(
        result => {
          if (result == 'yes') {
            for (let book of this.removeBookList) {
              this.productService.deleteProduct(book.id).subscribe(
                res => {
                  console.log(res);
                },
                err => {
                  console.log(err);
                  this.getProducts();
                  this.removeBookList = [];
                });
            }
          }
        });
    } else {
      let dialog = this.dialog.open(DialogErrorExampleDialog);
    }
  }
}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html'
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogResultExampleDialog>) { }
}

@Component({
  selector: 'dialog-error-example-dialog',
  templateUrl: './dialog-error-example-dialog.html'
})
export class DialogErrorExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogErrorExampleDialog>) { }
}
