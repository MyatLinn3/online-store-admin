import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
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
      },

      error => console.log(error)
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

  openDialog(book: any) {
    let dialog = this.dialog.open(DialogResultExampleDialog);
    dialog.afterClosed().subscribe(
      result => {
        if (result == 'yes') {
          this.productService.deleteProduct(book.id).subscribe(
            res => {
              console.log(res);
              this.ngOnInit();
            },
            err => {
              console.log(err)
            }
          )
        }
      }
    )
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
                  this.getProducts();
                },
                err => {
                  console.log(err)
                });
            }
          }
        });
    } else {
      let dialog = this.dialog.open(DialogErrorExampleDialog);
    }
 

  }

  // ngDoCheck(){
  //    this.getProducts()
  // }



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
