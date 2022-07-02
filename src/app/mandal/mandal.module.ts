import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MandalComponent } from './mandal.component';
import { RouterModule } from '@angular/router';
import { MandalRoutes } from './madal.routing';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'app/material/material.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [MandalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MandalRoutes),
    FormsModule,
    MaterialModule,
    NgxPaginationModule
  ],
  exports:[
    MandalComponent
  ]
})
export class MandalModule { }
