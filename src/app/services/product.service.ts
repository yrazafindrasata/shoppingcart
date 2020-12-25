import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product'
import { MessengerService } from './messenger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1,'Product 1', 'This is the product 1 description', 100, 10),
    new Product(2,'Product 2', 'This is the product 2 description', 150, 5),
    new Product(3,'Product 3', 'This is the product 3 description', 50, 8),
    new Product(4,'Product 4', 'This is the product 4 description', 200, 23),
    new Product(5,'Product 5', 'This is the product 5 description', 40, 4),
    new Product(6,'Product 6', 'This is the product 6 description', 120, 12),
    new Product(7,'Product 7', 'This is the product 7 description', 60, 0),
    new Product(8,'Product 8', 'This is the product 8 description', 100, 1),

  ]

  constructor() { }

 
  getProducts(): Product[]{
    //TODO: Populate products from an API an return Observable
    return this.products
  }
}
