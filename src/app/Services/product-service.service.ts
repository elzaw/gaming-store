import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productList: IProduct[];
  category: ICategory[];
  selectedCategory: string = 'All';

  constructor() {
    this.category = [
      { ID: 1, Name: 'Electronics' },
      { ID: 2, Name: 'Clothing' },
      { ID: 3, Name: 'Books' },
      { ID: 4, Name: 'Accessories' },
      { ID: 5, Name: 'Fitness' },
      { ID: 6, Name: 'Appliances' },
    ];

    this.productList = [
      {
        id: 1,
        name: 'Product A',
        quantity: 10,
        price: 50.0,
        img: '../../../assets/2.jpg',
        category_id: 1,
        purchaseDate: new Date(),
      },
      {
        id: 2,
        name: 'Product B',
        quantity: 5,
        price: 30.0,
        img: '../../../assets/3.jpg',
        category_id: 1,
        purchaseDate: new Date(),
      },
      {
        id: 3,
        name: 'Book',
        quantity: 30,
        price: 15.0,
        img: '../../../assets/4.jpg',
        category_id: 2,
        purchaseDate: new Date(),
      },
      {
        id: 4,
        name: 'Smartphone',
        quantity: 15,
        price: 800.0,
        img: '../../../assets/game.jpg',
        category_id: 0,
        purchaseDate: new Date(),
      },
      {
        id: 5,
        name: 'Product C',
        quantity: 8,
        price: 70.0,
        img: '../../../assets/5.jpg',
        category_id: 0,
        purchaseDate: new Date(),
      },
      {
        id: 6,
        name: 'Product D',
        quantity: 20,
        price: 45.0,
        img: '../../../assets/6.jpg',
        category_id: 1,
        purchaseDate: new Date(),
      },
      {
        id: 7,
        name: 'Headphones',
        quantity: 12,
        price: 120.0,
        img: '../../../assets/7.jpg',
        category_id: 0,
        purchaseDate: new Date(),
      },
      {
        id: 8,
        name: 'Laptop',
        quantity: 7,
        price: 1200.0,
        img: '../../../assets/8.jpg',
        category_id: 0,
        purchaseDate: new Date(),
      },
      {
        id: 9,
        name: 'Sunglasses',
        quantity: 25,
        price: 35.0,
        img: '../../../assets/9.jpg',
        category_id: 3,
        purchaseDate: new Date(),
      },
      {
        id: 10,
        name: 'Fitness Tracker',
        quantity: 18,
        price: 80.0,
        img: '../../../assets/10.jpg',
        category_id: 4,
        purchaseDate: new Date(),
      },
      {
        id: 11,
        name: 'Backpack',
        quantity: 15,
        price: 50.0,
        img: '../../../assets/11.jpg',
        category_id: 3,
        purchaseDate: new Date(),
      },
      {
        id: 12,
        name: 'Coffee Maker',
        quantity: 8,
        price: 90.0,
        img: '../../../assets/12.jpg',
        category_id: 5,
        purchaseDate: new Date(),
      },
    ];
  }

  getAllProducts(): IProduct[] {
    return this.productList;
  }

  getAllCategories(): ICategory[] {
    return this.category;
  }

  getProductByID(prodID: number): IProduct | undefined {
    return this.productList.find((product) => product.id === prodID);
  }

  getProductsIdList(): number[] {
    return this.productList.map((prd) => prd.id);
  }
  // getFilteredProducts(selectedCategory: string): IProduct[] {
  //   return selectedCategory === 'All'
  //     ? this.productList
  //     : this.productList.filter(0
  //         (product) => product.category === selectedCategory
  //       );
  // }
}
