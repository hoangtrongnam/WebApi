import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { RoleComponent } from './role';
import { AuthGuard } from '@/_helpers';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'tally/category', component: CategoryComponent, canActivate: [AuthGuard] },
      // { path: 'role', component: RoleComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
