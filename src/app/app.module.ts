import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturedComponent } from './featured/featured.component';
import { SearchComponent } from './search/search.component';
import { DealsComponent } from './deals/deals.component';
import { LoginComponent } from './login/login.component';
import { ResultsComponent } from './results/results.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeaturedComponent,
    SearchComponent,
    DealsComponent,
    LoginComponent,
    ResultsComponent,
    ProfileComponent
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
