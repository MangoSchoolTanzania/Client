import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { ResultsComponent } from './results/results.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from './environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    VolunteerComponent,
    ScholarshipComponent,
    ResultsComponent,
    ContactComponent,
    GalleryComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule, 
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [environment],
  bootstrap: [AppComponent]
})
export class AppModule { }
