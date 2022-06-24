import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanchalakComponent } from './sanchalak.component';
import { SanchalakRoutes } from './sanchalak.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from 'app/material/material.module';

@NgModule({
  declarations: [SanchalakComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    AngularMultiSelectModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(SanchalakRoutes)
  ],
  exports:[
    SanchalakComponent
  ]
})
export class SanchalakModule { }
