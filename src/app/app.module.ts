import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AboutComponent } from "./Pages/about/about.component";
import { AdminComponent } from "./Pages/admin/admin.component";
import { ContactComponent } from "./Pages/contact/contact.component";
import { GalleryComponent } from "./Pages/gallery/gallery.component";
import { HomeComponent } from "./Pages/home/home.component";
import { ResultsComponent } from "./Pages/results/results.component";
import { ScholarshipComponent } from "./Pages/scholarship/scholarship.component";
import { VolunteerComponent } from "./Pages/volunteer/volunteer.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "./environment";
import { FooterComponent } from "./shared/footer/footer.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { AdminPanelComponent } from './Pages/admin/admin-panel/admin-panel.component';
import { AdminManageResultsComponent } from './Pages/admin/admin-panel/admin-manage-results/admin-manage-results.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AddUpdateResultComponent } from './Pages/admin/admin-panel/admin-manage-results/add-update-result/add-update-result.component';
import { AdminManageClassesComponent } from './Pages/admin/admin-panel/admin-manage-classes/admin-manage-classes.component';

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
    AdminComponent,
    AdminPanelComponent,
    AdminManageResultsComponent,
    AddUpdateResultComponent,
    AdminManageClassesComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule, 
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [environment],
  bootstrap: [AppComponent]
})
export class AppModule { }
