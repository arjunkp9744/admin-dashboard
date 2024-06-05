import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployesComponent } from './employes/employes.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'employes',component:EmployesComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contact',component:ContactsComponent},
  {path:'leads',component:LeadsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
