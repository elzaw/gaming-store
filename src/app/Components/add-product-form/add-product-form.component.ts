import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductAPIService } from '../../Services/product-api.service';
import { Router } from '@angular/router';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-add-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, CommonModule],
  templateUrl: './add-product-form.component.html',
  styleUrl: './add-product-form.component.scss',
})
export class AddProductFormComponent {
  formGroup1!: FormGroup;
  product: IProduct = {} as IProduct;

  constructor(
    private productSevice: ProductAPIService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // this.formGroup1 = new FormGroup({
    //   productName: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(3),
    //   ]),
    //   price: new FormControl(0, [Validators.required, Validators.min(0)]),
    //   quantity: new FormControl(0, [Validators.required, Validators.min(0)]),
    //   category: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(3),
    //   ]),
    // });
  }
  // newProduct: IProduct = { ...this.formGroup1.value };
  ngOnInit() {
    // this.formGroup1 = this.fb.group({
    //   productName: ['', [Validators.required, Validators.minLength(3)]],
    //   price: [0, [Validators.required, Validators.min(0)]],
    //   quantity: [0, [Validators.required, Validators.min(0)]],
    //   category: ['', [Validators.required, Validators.minLength(3)]],
    // });
  }

  // addProduct(p: any.) {
  //   this.productSevice.addProduct(this.product).subscribe({
  //     next: (prd) => {
  //       console.log(prd);
  //       console.log(p);
  //       prd.name = p.productName;

  //       this.router.navigate(['']);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }

  addProduct() {
    this.productSevice.addProduct(this.product).subscribe({
      next: (u) => {
        console.log(u);
        this.router.navigate(['']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  // get productName() {
  //   return this.formGroup1.get('productName');
  // }

  // get price() {
  //   return this.formGroup1.get('price');
  // }
  // get quantity() {
  //   return this.formGroup1.get('quantity');
  // }
  // get category() {
  //   return this.formGroup1.get('category');
  // }
}
