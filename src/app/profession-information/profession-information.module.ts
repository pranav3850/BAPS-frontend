import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionInformationComponent } from './profession-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { MaterialModule } from 'app/material/material.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import {ProfessionRoutes } from './profession-information.routing';



@NgModule({
  declarations: [ProfessionInformationComponent],
  imports: [
    CommonModule,
    FormsModule,
  RouterModule.forChild(ProfessionRoutes),
    NgxPaginationModule,
    AngularMultiSelectModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports:[
    ProfessionInformationComponent
  ]
})
export class ProfessionInformationModule { }
