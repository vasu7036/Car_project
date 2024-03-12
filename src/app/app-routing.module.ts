import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';
import { SinglecarDetailsComponent } from './components/singlecar-details/singlecar-details.component';

const routes: Routes = [
  // {path:"dashboard",component:DashboardComponent},
  {path:'', component:DashboardComponent,children:[
    
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'details',component:DetailsComponent},
    {path:'update-vehicle/:id',component:UpdateVehicleComponent},
    {path:'singlecar-details/:id',component:SinglecarDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
