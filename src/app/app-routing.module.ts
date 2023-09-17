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
import { AdminPanelComponent } from "./Pages/admin/admin-panel/admin-panel.component";
import { AdminManageResultsComponent } from "./Pages/admin/admin-panel/admin-manage-results/admin-manage-results.component";
import { AdminManageUsersComponent } from "./Pages/admin/admin-panel/admin-manage-users/admin-manage-users.component";
import { AdminManageMessagesComponent } from "./Pages/admin/admin-panel/admin-manage-messages/admin-manage-messages.component";
import { AddUpdateResultComponent } from "./Pages/admin/admin-panel/admin-manage-results/add-update-result/add-update-result.component";
import { AdminManageClassesComponent } from "./Pages/admin/admin-panel/admin-manage-classes/admin-manage-classes.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent, pathMatch: 'full' },
  { path: 'results', component: ResultsComponent, pathMatch: 'full' },
  { path: 'scholarship', component: ScholarshipComponent, pathMatch: 'full' },
  { path: 'volunteer', component: VolunteerComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, pathMatch: 'full' },
  { path: 'admin-panel', component: AdminPanelComponent, pathMatch: 'full' },
  { path: 'admin-manage-results', component: AdminManageResultsComponent, pathMatch: 'full' },
  { path: 'admin-manage-users', component: AdminManageUsersComponent, pathMatch: 'full' },
  { path: 'admin-manage-messages', component: AdminManageMessagesComponent, pathMatch: 'full' },
  { path: 'admin-manage-classes', component: AdminManageClassesComponent, pathMatch: 'full' },
  { path: 'add-update-result', component: AddUpdateResultComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
