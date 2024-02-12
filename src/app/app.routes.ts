import { Routes } from '@angular/router';
import { ProductParentComponent } from './Components/product-parent/product-parent.component';
import { ProductDetalisComponent } from './Components/product-detalis/product-detalis.component';
import { ProductsComponent } from './Components/products/products.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { GroupOfComponentsComponent } from './Components/group-of-component/group-of-component.component';
import { ObsAndOpComponent } from './Components/obs-and-op/obs-and-op.component';
import { AddProductStaticComponent } from './Components/add-product-static/add-product-static.component';
import { AddProductFormComponent } from './Components/add-product-form/add-product-form.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { LoginComponent } from './Components/login/login.component';
import { authGuard } from './Guards/auth.guard';

export const routes: Routes = [
  { path: '', component: ProductParentComponent },
  { path: 'home', component: ProductsComponent, title: 'home' },
  {
    path: 'product/:id',
    component: ProductDetalisComponent,
    title: 'Product details page',
    canActivate: [authGuard],
  },
  { path: 'observer', component: ObsAndOpComponent, title: 'observer' },
  { path: 'side', component: SideMenuComponent },
  {
    path: 'form',
    component: AddProductFormComponent,
    title: 'add form',
  },
  {
    path: 'register',
    component: UserRegistrationComponent,
    title: 'Register',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'addStatic',
    component: AddProductStaticComponent,
    title: 'add static',
  },

  {
    path: '',
    component: GroupOfComponentsComponent,
    children: [{ path: '**', component: NotFoundComponent }],
  },
];
