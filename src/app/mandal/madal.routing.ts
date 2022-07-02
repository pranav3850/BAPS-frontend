import { Routes } from '@angular/router';
import { MandalComponent } from './mandal.component';


export const MandalRoutes: Routes = [{
    path: '',
    children: [{
        path: 'mandal',
        component: MandalComponent
    }]
}];
