import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DiscountOffers } from '../../Models/discount-offers';
import { Store } from '../../Models/store';
import { IProduct } from '../../Models/iproduct';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { ProductCardDirective } from '../../Directives/product-card.directive';
import { CreditCardFormatPipe } from '../../Pipes/credit-card-format.pipe';
import { ICategory } from '../../Models/icategory';
import { ProductService } from '../../Services/product-service.service';
import { Router } from '@angular/router';
import { ProductAPIService } from '../../Services/product-api.service';
import { CategoryAPIService } from '../../Services/category-api.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'], // <-- Corrected property name
  imports: [
    AppComponent,
    FormsModule,
    CommonModule,
    CreditCardFormatPipe,
    ProductCardDirective,
    HeaderComponent,
  ],
})
export class ProductsComponent implements OnInit {
  ClientName: string;
  productsList!: IProduct[];
  categoryList!: ICategory[];
  showUpdateFormFlag: boolean = false;
  updatedProduct!: IProduct;

  selectedCategory: number = -1;
  Discount: string = '10%';
  IsPurchased: boolean = false;
  @Output() addPrdsEvent = new EventEmitter<IProduct>();
  discount: DiscountOffers = DiscountOffers.TenPercent;

  store: Store;

  @Input() set childValue(value: string) {
    console.log(value);
    this.productService.getAllProducts().subscribe((data) => {
      this.productsList = data.filter((prd) =>
        prd.price.toString().includes(value)
      );
      console.log(this.productsList);
    });
  }

  constructor(
    public productService: ProductAPIService,
    public categoryService: CategoryAPIService,
    private router: Router
  ) {
    this.ClientName = 'John Doe';

    this.store = new Store(
      'My Store',
      ['Branch1', 'Branch2'],
      '../../../assets/logo.jpeg'
    );
  }

  ngOnInit(): void {
    // this.productsList = this.productService.getAllProducts();
    // this.categoryList = this.productService.getAllCategories();
    this.filteredProducts();
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.productsList = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.categoryList = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  togglePurchase() {
    this.IsPurchased = !this.IsPurchased;
  }

  buyProduct(product: IProduct) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }
  showDetails(productID: number) {
    this.router.navigate(['/product', productID]);
  }
  addToCart(prd: IProduct) {
    // console.log(
    //   this.selectedCategory,
    //   this.productsList.filter(
    //     (product) => product.category_id === this.selectedCategory
    //   )
    // );

    this.addPrdsEvent.emit(prd);
  }
  deleteProduct(prdId: number) {
    this.productService.deleteProduct(prdId).subscribe({
      next: (data) => {
        alert('deleted!!!!!');
        this.router.navigate(['home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateProduct(prdId: number, product: IProduct) {
    this.productService.updateProduct(prdId, product).subscribe({
      next: (data) => {
        console.log(data);
        data.name = product.name;
        data.price = product.price;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.updatedProduct = product;
  }

  showUpdate() {
    this.showUpdateFormFlag = !this.showUpdateFormFlag;
  }
  filteredProducts(): IProduct[] {
    if (this.selectedCategory == -1) {
      return this.productsList;
    }
    return this.productsList.filter(
      (product: IProduct) => product.category_id === this.selectedCategory
    );
  }
}
