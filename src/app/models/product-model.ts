export class Product {

  public id: number;
  public productName: string;
  public price: number;
  public availableQuantity: number;
  public isAvailable: boolean = true;
  public description: string;
  public category: string;
  public targetSize: string;
  public imageUrl: string;
  public date: string = new Date().toISOString();
}
