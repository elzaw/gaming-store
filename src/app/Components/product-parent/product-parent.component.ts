import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../Models/iproduct';
import { CreditCardFormatPipe } from '../../Pipes/credit-card-format.pipe';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
// import { DiscountOffers } from '../../Models/discount-offers';
// import { Store } from '../../Models/store';

@Component({
  selector: 'app-product-parent',
  standalone: true,
  templateUrl: './product-parent.component.html',
  styleUrl: './product-parent.component.scss',
  imports: [
    ProductsComponent,
    FormsModule,
    CreditCardFormatPipe,
    CommonModule,
    HeaderComponent,
  ],
})
export class ProductParentComponent {
  selectedCategory: string = 'All';
  // productCategories: string[] = ['Electronics', 'Clothing', 'Books'];

  cart: { product: IProduct; quantity: number; totalPrice: number }[] = [];
  parentValue: string = '';

  addFunc(product: IProduct) {
    const existingProduct = this.cart.find((p) => p.product.id === product.id);

    if (existingProduct) {
      // Product is already in the cart, increment quantity and update total price
      existingProduct.quantity++;
      existingProduct.totalPrice =
        existingProduct.quantity * existingProduct.product.price;
    } else {
      // Product is not in the cart, add it with quantity 1 and calculate total price
      const newCartItem = {
        product,
        quantity: 1,
        totalPrice: product.price,
      };
      this.cart.push(newCartItem);
    }
  }

  removeFromCart(item: any) {
    this.cart = this.cart.filter((i) => i !== item);
  }
}

// // Find the index of the item in the cart array
//   const index = this.cart.indexOf(item);

//   // If the item is found in the array
//   if (index !== -1) {
//     // Get the quantity before removing the item
//     const deletedQuantity = this.cart[index].quantity;

//     // Remove the item from the cart array
//     this.cart = this.cart.filter(cartItem => cartItem !== item);

//     // Return the quantity of the deleted product
//     return deletedQuantity;
//   }

//   // If the item is not found, return 0 or handle the scenario accordingly
//   return 0;
