import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserDetailsComponent } from './all-user-details/all-user-details.component';
import { DisplayformComponent } from './displayform/displayform.component';
import { FormComponent } from './form/form.component';




//specifiying the route url for Display component, the component will be loaded upon navigation to specified path below
const routes: Routes = [
  {path:'',component: FormComponent, pathMatch:"full"},
  { path:'display', component: DisplayformComponent, pathMatch:"full" },
  { path:'allusers', component: AllUserDetailsComponent, pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }