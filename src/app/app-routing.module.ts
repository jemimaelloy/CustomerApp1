import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerformsComponent } from './customerforms/customerforms.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';


const routes: Routes = [
  {path:'customerDetails',component:CustomerdetailsComponent},
  {path:'customerForm',component:CustomerformsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[CustomerdetailsComponent,CustomerformsComponent]