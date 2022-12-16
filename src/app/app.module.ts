import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import {
  GridModule,
   PagerModule,
    PageService,
  GroupService,
  SortService,
  FilterService,
  EditService,
  ToolbarService,
  ExcelExportService

} from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodpageComponent,
    CartPageComponent,
    NotFoundComponent,
    SignupComponent,
    SignInComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule ,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GridModule,
    PagerModule,
  ],
  providers: [
    GroupService,
    SortService,
    FilterService,
    PageService,
    EditService,
    ToolbarService,
    ExcelExportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
