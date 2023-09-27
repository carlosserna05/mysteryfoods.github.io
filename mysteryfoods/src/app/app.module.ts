import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { EditMysteryComponent } from './edit-mystery/edit-mystery.component';
import { ListMysteryComponent } from './list-mystery/list-mystery.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CustomerInformationComponent } from './customer-information/customer-information.component';
import { OrderComponent } from './order/order.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditMysteryComponent,
    ListMysteryComponent,
    HomeComponent,
    CustomerInformationComponent,
    OrderComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    MatTableModule,
    MatTabsModule,
    HttpClientModule,
    MatCheckboxModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
