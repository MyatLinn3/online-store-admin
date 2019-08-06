import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product-model';

@Pipe({
  name: 'simpProds'
})
export class SimpProdsPipe implements PipeTransform {

  transform(value: Product[], ...args: any[]): any {
    let datas = new Map();
    let num = 0;
    value.forEach(val => {
      datas.set(val.productName, 'x' + num);
      for (let key of datas.keys()) {
        if (key === val.productName) {
          num += 1;
          datas.set(val.productName, 'x' + num);
        }
      }
    });
    console.log(Array.from(datas));
    return Array.from(datas);
  }

}
