import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { CollectionspageComponent } from './collectionspage/collectionspage.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { ShopallComponent } from './shopall/shopall.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './services/user/user.service';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'account', component: AccountpageComponent},
  { path: 'shop', component: ShopallComponent },
  { path: 'shopall', component: ShopallComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountpageComponent,
    CollectionspageComponent,
    TermsandconditionsComponent,
    ShopallComponent,
    AboutpageComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
