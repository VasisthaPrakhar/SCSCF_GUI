import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DataTableComponent } from './data-table/data-table.component';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main/main.component';
import { ScscfComponent } from './scscf/scscf.component';
import { TasComponent } from './tas/tas.component';


const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'dashboard', component:MainComponent},
  {path:'scscf', component:ScscfComponent},
  {path:'tas', component:TasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
