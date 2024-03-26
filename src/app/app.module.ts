import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TopPlayerComponent } from './components/top-player/top-player.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductRegComponent } from './components/product-reg/product-reg.component';
import { AccSyntheticComponent } from './components/acc-synthetic/acc-synthetic.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './admin/create/create.component';
import { EditComponent } from './admin/edit/edit.component';
import { ManageComponent } from './admin/manage/manage.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterComponent } from './components/register/register.component';
import { AccloneComponent } from './components/acclone/acclone.component';
import { AccrandomComponent } from './components/accrandom/accrandom.component';
import { SpinComponent } from './components/spin/spin.component';
@NgModule({
  declarations: [
    AppComponent,
    UserLayoutComponent,
    AdminLayoutComponent,
    NotfoundComponent,
    HomeComponent,
    HeaderComponent,
    IntroduceComponent,
    PortfolioComponent,
    TopPlayerComponent,
    FooterComponent,
    ProductRegComponent,
    AccSyntheticComponent,
    SearchComponent,
    DetailsComponent,
    CartComponent,
    CreateComponent,
    EditComponent,
    ManageComponent,
    LoginComponent,
    RegisterComponent,
    AccloneComponent,
    AccrandomComponent,
    SpinComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
