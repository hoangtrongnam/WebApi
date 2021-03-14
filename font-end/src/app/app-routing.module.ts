import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import custom preload strategy
import { CustomPreloadingStrategyService } from '@_services/custom-preloading-strategy.service';

import { LoginComponent } from './layouts/admin/login/login.component';
import { AdminComponent } from '@/layouts/admin/admin.component';

import { AuthGuard } from './_helpers';
// import { ProductComponent } from './pages/customer-page/product/product.component';
import { CustomerComponent } from './layouts/customer/customer.component';

//set preload: true for loading after appModule
const routes: Routes = [
  // {
  //   path: 'customer',
  //   component: AdminComponent,
  //   children: [
  //     {
  //       path: '**',
  //       // canActivate: [AuthGuard],
  //       loadChildren: () => import('@pages/manager/manager.module').then(m => m.ManagerModule), data: { preload: true }
  //     }
  //   ]
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'product',
  //   component: ProductComponent
  // },
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: '',
        //canActivate: [AuthGuard],
        loadChildren: () => import('@/pages/customer-page/customer.module').then(m => m.CustomerModule), data: { preload: true }
      }
    ]
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
