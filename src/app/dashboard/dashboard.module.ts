import { ProfessionInformationModule } from 'app/profession-information/profession-information.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AgmCoreModule
} from '@agm/core';
import { DashboardComponent } from './dashboard.component';

import { DashboardRoutes } from './dashboard.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from 'app/material/material.module';
import { CustomerModule } from 'app/customer/customer.module';
import { CustomerComponent } from 'app/customer/customer.component';
import { ProfessionInformationComponent } from 'app/profession-information/profession-information.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    FormsModule,
    MaterialModule,
    NgxPaginationModule,
    ProfessionInformationModule,
    CustomerModule,
   
  ],
  declarations: [DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[
    CustomerComponent,
    ProfessionInformationComponent
  ]
})

export class DashboardModule { }
