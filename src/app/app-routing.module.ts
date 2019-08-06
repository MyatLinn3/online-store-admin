import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UserOrderComponent } from './components/user-order/user-order.component';
import { MonthlySaleComponent } from './components/monthly-sale/monthly-sale.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'viewProduct/:id', component: ViewProductComponent },
  { path: 'editProduct/:id', component: EditProductComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'monthlySale', component: MonthlySaleComponent },
  {
    path: 'orders', component: UserOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
