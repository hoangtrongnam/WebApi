import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '@/_modules/material.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { ManagerRoutingModule } from './manager-routing.module';
// import { RoleComponent } from './role';
import { AlertModule } from '@/_components/alert/alert.module';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxSpinnerModule } from 'ngx-spinner';


import { OrderModule } from 'ngx-order-pipe';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { CategoryComponent } from './category/category.component';
@NgModule({
    imports: [
        OrderModule,
        CommonModule,
        CurrencyMaskModule,
        FormsModule,
        MaterialModule,
        ManagerRoutingModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule,
        FileUploadModule,
        AlertModule,
        NgxSpinnerModule,
        NgSelectModule,
        NgxLoadingModule.forRoot({
          animationType: ngxLoadingAnimationTypes.circleSwish,
          backdropBackgroundColour: 'rgba(0,0,0,0.1)',
          primaryColour: '#ffffff',
          secondaryColour: '#ffffff',
          tertiaryColour: '#ffffff'
        }),
        ConfirmationPopoverModule.forRoot({
          confirmButtonType: 'danger' // set defaults here
        })
    ],
    exports: [
        // RoleComponent,
        CategoryComponent,
    ],
    declarations: [
        // RoleComponent,
        CategoryComponent,
    ],
    entryComponents: [
    ]
})
export class ManagerModule { }
