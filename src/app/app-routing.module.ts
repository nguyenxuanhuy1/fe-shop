import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ProductRegComponent } from './components/product-reg/product-reg.component';
import { DetailsComponent } from './components/details/details.component';
import { CartComponent } from './components/cart/cart.component';
import { CreateComponent } from './admin/create/create.component';
import { ManageComponent } from './admin/manage/manage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AccSyntheticComponent } from './components/acc-synthetic/acc-synthetic.component';
import { AccloneComponent } from './components/acclone/acclone.component';
import { AccrandomComponent } from './components/accrandom/accrandom.component';
import { SpinComponent } from './components/spin/spin.component';
import { EditComponent } from './admin/edit/edit.component';

const routes: Routes = [
  {
    path: '', component: UserLayoutComponent, children: [
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: 'create', component: CreateComponent },
      { path: 'manage', component: ManageComponent },
      { path: 'edit/:id', component: EditComponent }
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: 'synthetic', component: AccSyntheticComponent },
  { path: 'acclone', component: AccloneComponent },
  { path: 'accrandom', component: AccrandomComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'accreg', component: ProductRegComponent },
  { path: 'cart', component: CartComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'spin', component: SpinComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
