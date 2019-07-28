import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {AddProductComponent} from './components/add-product/add-product.component';
import {ViewProductComponent} from './components/view-product/view-product.component';
import {EditProductComponent} from './components/edit-product/edit-product.component';


const routes: Routes = [
  {path:'',redirectTo:'productList',pathMatch:'full'},
  {path:'productList',component:ProductListComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'viewProduct/:id',component:ViewProductComponent},
  {path:'editProduct/:id',component:EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
