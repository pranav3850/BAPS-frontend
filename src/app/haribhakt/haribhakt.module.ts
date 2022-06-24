import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HaribhaktComponent } from './haribhakt.component';
import { HaribhaktRoutes } from './haribhakt.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from 'app/material/material.module';


@NgModule({
  declarations: [HaribhaktComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    AngularMultiSelectModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(HaribhaktRoutes)
  ]
})
export class HaribhaktModule { }
