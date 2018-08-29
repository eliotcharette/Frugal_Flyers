import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatToolbarModule, MatAutocompleteModule, MatDatepickerModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatButtonToggleModule, MatTooltipModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule, MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, MatExpansionModule, MatChipsModule, MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule, MatSnackBarModule, MatTableModule, MatSortModule, MatPaginatorModule, MatNativeDateModule } from '@angular/material';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturedComponent } from './featured/featured.component';
import { SearchComponent } from './search/search.component';
import { DealsComponent } from './deals/deals.component';
import { LoginComponent } from './login/login.component';
import { ResultsComponent } from './results/results.component';
import { ProfileComponent } from './profile/profile.component';
import { ColombiaComponent } from './colombia/colombia.component';
import { ItalyComponent } from './italy/italy.component';
import { IcelandComponent } from './iceland/iceland.component';
import { AboutComponent } from './about/about.component';
import { BogotaComponent } from './bogota/bogota.component';
import { MedellinComponent } from './medellin/medellin.component';
import { CartagenaComponent } from './cartagena/cartagena.component';
import { CaliComponent } from './cali/cali.component';
import { CarribComponent } from './carrib/carrib.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { NewzealandComponent } from './newzealand/newzealand.component';
import { CroatiaComponent } from './croatia/croatia.component';
library.add(fas, far, fab);


@NgModule({
  declarations: [
    AppComponent,
    NavheaderComponent,
    FooterComponent,
    FeaturedComponent,
    SearchComponent,
    DealsComponent,
    LoginComponent,
    ResultsComponent,
    ProfileComponent,
    ColombiaComponent,
    ItalyComponent,
    IcelandComponent,
    AboutComponent,
    BogotaComponent,
    MedellinComponent,
    CartagenaComponent,
    CaliComponent,
    CarribComponent,
    NewzealandComponent,
    CroatiaComponent,
  ],
  imports: [
    MatNativeDateModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FontAwesomeModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
