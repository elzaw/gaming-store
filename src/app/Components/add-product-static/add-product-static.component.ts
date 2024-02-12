import { Component } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { ProductAPIService } from '../../Services/product-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-static',
  standalone: true,
  imports: [],
  templateUrl: './add-product-static.component.html',
  styleUrl: './add-product-static.component.scss',
})
export class AddProductStaticComponent {
  // newProduct: IProduct = {} as IProduct;

  constructor(
    public productService: ProductAPIService,
    private router: Router
  ) {}

  addProduct() {
    const newProduct = {
      id: 13,
      name: 'new product',
      quantity: 15,
      price: 60,
      img: '',
      category_id: 0,
      purchaseDate: new Date(),
    };

    this.productService.addProduct(newProduct).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
