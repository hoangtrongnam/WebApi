import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import custom preload strategy
import { CustomPreloadingStrategyService } from '@_services/custom-preloading-strategy.service';

import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from '@/layouts/admin/admin.component';

import { AuthGuard } from './_helpers';

//set preload: true for loading after appModule
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import('@pages/manager/manager.module').then(m => m.ManagerModule), data: { preload: true }
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategyService })],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategyService]
})
export class AppRoutingModule { }
