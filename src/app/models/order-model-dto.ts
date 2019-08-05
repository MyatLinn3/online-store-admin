import {Product} from './product-model';
import {ShippingAddress} from './shipping-address-model';

export  class OrderDto {

  public products:Product[]=[];
  public shippingAddress:ShippingAddress;

}
