import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path : "" ,redirectTo : "list" , pathMatch : "full"},
  {path : "test", component : TestComponent},
  {path : "list", component : ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
