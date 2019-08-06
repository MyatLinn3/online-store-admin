import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import {DialogResultExampleDialog, ProductListComponent} from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './services/product.service';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UserOrderComponent } from './components/user-order/user-order.component';
import { MonthlySaleComponent } from './components/monthly-sale/monthly-sale.component';
import { FulladdressPipe } from './pipes/fulladdress.pipe';
import { SimpProdsPipe } from './pipes/simp-prods.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    ProductListComponent,
    AddProductComponent,
    DialogResultExampleDialog,
    ViewProductComponent,
    EditProductComponent,
    FooterComponent,
    LogoutComponent,
    WelcomeComponent,
    UserOrderComponent,
    MonthlySaleComponent,
    FulladdressPipe,
    SimpProdsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],

  entryComponents:[
    DialogResultExampleDialog
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
