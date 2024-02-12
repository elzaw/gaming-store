import { Component } from '@angular/core';

import { ProductsComponent } from './Components/products/products.component';
import { HeaderComponent } from './Components/header/header.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductParentComponent } from './Components/product-parent/product-parent.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    ProductsComponent,
    ProductParentComponent,
    RouterModule,
    NavBarComponent,
  ],
})
export class AppComponent {
  title = 'gaming-store';
}
