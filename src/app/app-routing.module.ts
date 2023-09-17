import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./Pages/about/about.component";
import { AdminComponent } from "./Pages/admin/admin.component";
import { ContactComponent } from "./Pages/contact/contact.component";
import { GalleryComponent } from "./Pages/gallery/gallery.component";
import { HomeComponent } from "./Pages/home/home.component";
import { ResultsComponent } from "./Pages/results/results.component";
import { ScholarshipComponent } from "./Pages/scholarship/scholarship.component";
import { VolunteerComponent } from "./Pages/volunteer/volunteer.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent, pathMatch: 'full' },
  { path: 'results', component: ResultsComponent, pathMatch: 'full' },
  { path: 'scholarship', component: ScholarshipComponent, pathMatch: 'full' },
  { path: 'volunteer', component: VolunteerComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
