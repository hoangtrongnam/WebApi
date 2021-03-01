import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from './role';
import { AuthGuard } from '@/_helpers';
import { WarehouseManageComponent, WarehouseOutputComponent, ChiTietXuatKhoComponent, DuyetXuatKhoComponent, WarehouseInputComponent } from './warehouse';
import { ACQTComponent, TallyPackageComponent, BoxCloseComponent, BoxExportComponent, BoxDownloadComponent, KiemDemThungComponent, WarehouseDocumentComponent, ConfirmCompleteComponent } from './tally';
import { CategoryComponent } from './category/category.component';
import { PrintLabelPackageComponent } from './tally/package';
import { ActionReportComponent, ContrastReportComponent, DetailReportComponent, InventoryReportComponent, ReportTallyComponent } from './report';
import { ReceiverInforComponent, RequestTicketManagementComponent, AllocationACQTComponent, ReportACQTComponent, SendEmailComponent, TicketManageComponent, ApproveTicketComponent } from './form';
import { ApproveInforWarehouseComponent, ContrastInforManagementComponent, ContrastObjectComponent } from './input-warehouse-unit';
import { DischargeWarehouseComponent } from './discharge-warehouse/discharge-warehouse.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'warehouse/management', component: WarehouseManageComponent, canActivate: [AuthGuard] },
      { path: 'warehouse/synch-erp-management', component: WarehouseOutputComponent, canActivate: [AuthGuard] },
      { path: 'warehouse/detail-delivery', component: ChiTietXuatKhoComponent, canActivate: [AuthGuard] },
      { path: 'warehouse/approve-delivery', component: DuyetXuatKhoComponent, canActivate: [AuthGuard] },
      { path: 'warehouse/input', component: WarehouseInputComponent, canActivate: [AuthGuard] },
  
      
      { path: 'tally/acqt', component: ACQTComponent, canActivate: [AuthGuard] },
      { path: 'tally/category', component: CategoryComponent, canActivate: [AuthGuard] },
      { path: 'tally/index-package', component: TallyPackageComponent, canActivate: [AuthGuard] },
      { path: 'tally/box-close', component: BoxCloseComponent, canActivate: [AuthGuard] },
      { path: 'tally/export-box', component: BoxExportComponent, canActivate: [AuthGuard] },
      { path: 'tally/download-adi', component: BoxDownloadComponent, canActivate: [AuthGuard] },
      { path: 'tally/index-box', component: KiemDemThungComponent, canActivate: [AuthGuard] },
      { path: 'tally/lapchungtukd', component: WarehouseDocumentComponent, canActivate: [AuthGuard] },
      { path: 'tally/confirm-complete', component: ConfirmCompleteComponent, canActivate: [AuthGuard] },
      { path: 'print', component: PrintLabelPackageComponent, canActivate: [AuthGuard] },
  
      { path: 'report/report-tally', component: ReportTallyComponent, canActivate: [AuthGuard] },
      { path: 'management-report/contrast-report', component: ContrastReportComponent, canActivate: [AuthGuard] },
      { path: 'management-report/inventory-report', component: InventoryReportComponent, canActivate: [AuthGuard] },
      { path: 'management-report/action-report', component: ActionReportComponent, canActivate: [AuthGuard] },
      { path: 'management-report/detail-report', component: DetailReportComponent, canActivate: [AuthGuard] },
  
      { path: 'form/infor-receiver', component: ReceiverInforComponent, canActivate: [AuthGuard] },
      { path: 'form/req-ticket', component: RequestTicketManagementComponent, canActivate: [AuthGuard] },
      { path: 'form/allocation-acqt', component: AllocationACQTComponent, canActivate: [AuthGuard] },
      { path: 'form/report-acqt', component: ReportACQTComponent, canActivate: [AuthGuard] },
      { path: 'form/send-email', component: SendEmailComponent, canActivate: [AuthGuard] },
      { path: 'form/ticket-manage', component: TicketManageComponent, canActivate: [AuthGuard] },
      { path: 'form/approve-ticket', component: ApproveTicketComponent, canActivate: [AuthGuard] },
      
      { path: 'input-warehouse/approve-infor', component: ApproveInforWarehouseComponent, canActivate: [AuthGuard] },
      { path: 'input-warehouse/contrast-infor', component: ContrastInforManagementComponent, canActivate: [AuthGuard] },
      { path: 'input-warehouse/contrast-object', component: ContrastObjectComponent, canActivate: [AuthGuard] },

      { path: 'discharge-warehouse/management', component: DischargeWarehouseComponent, canActivate: [AuthGuard] },
      { path: 'role', component: RoleComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
