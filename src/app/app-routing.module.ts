import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddformComponent } from './addform/addform.component';
import { DashComponent } from './dash/dash.component';

const routes: Routes = [
{path:'home',component:DashComponent},
{path:'eform',component:AddformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
