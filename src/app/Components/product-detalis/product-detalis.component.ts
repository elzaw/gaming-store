import { Component } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { ProductService } from '../../Services/product-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductAPIService } from '../../Services/product-api.service';
import { CategoryAPIService } from '../../Services/category-api.service';
import { ICategory } from '../../Models/icategory';

@Component({
  selector: 'app-product-detalis',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detalis.component.html',
  styleUrl: './product-detalis.component.scss',
})
export class ProductDetalisComponent {
  productID: number = 0;
  product: IProduct | undefined;
  categories!: ICategory[];
  category!: ICategory;
  productIdList: number[] = [];
  currentIndex: number = 0;
  // inject
  constructor(
    private productService: ProductService,
    private productWithAPI: ProductAPIService,
    private categoryService: CategoryAPIService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    

    this.productIdList = this.productService.getProductsIdList();

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.productID = paramMap.get('id') ? Number(paramMap.get('id')) : 0;

      this.product = this.productService.getProductByID(this.productID);

      this.productWithAPI.getProductByID(this.productID).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    });

    // this.productID = this.activatedRoute.snapshot.paramMap.get('id')
    //   ? Number(this.activatedRoute.snapshot.paramMap.get('id'))
    //   : 0;

    // this.productService.getProductByID(this.productID).subscribe({
    //   next: (data) => {
    //     this.product = data;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });

    // this.category = this.categories[this.productID];
  }

  nextProduct() {
    this.currentIndex = this.productIdList.indexOf(this.productID);

    this.router.navigate(['/product', this.productIdList[++this.currentIndex]]);
  }

  prevProduct() {
    this.currentIndex = this.productIdList.indexOf(this.productID);

    this.router.navigate(['/product', this.productIdList[--this.currentIndex]]);
  }

  test() {
    console.log(this.categories[this.productID]);
  }
}
