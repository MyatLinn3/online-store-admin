import { Pipe, PipeTransform } from '@angular/core';
import { ShippingAddress } from '../models/shipping-address-model';

@Pipe({
  name: 'fulladdress'
})
export class FulladdressPipe implements PipeTransform {

  transform(value: ShippingAddress, ...args: any[]): string {
    return value.country + ',' + value.state + ',' + value.city + ',' + value.township + ',' + value.streetAddress;
  }

}
