import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EditMysteryComponent } from './edit-mystery/edit-mystery.component';
import { ListMysteryComponent } from './list-mystery/list-mystery.component';
import { HomeComponent } from './home/home.component';
import { CustomerInformationComponent } from './customer-information/customer-information.component';
import { OrderComponent } from './order/order.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'customer/:id', component:CustomerInformationComponent},
  {path:'order/:id',component:OrderComponent},
  { path: 'login', component: LoginComponent},
  { path: 'list', component: ListMysteryComponent},
  { path: 'edit/:id', component: EditMysteryComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
