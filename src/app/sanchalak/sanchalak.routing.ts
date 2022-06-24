import { Routes } from '@angular/router';
import { SanchalakComponent } from './sanchalak.component';


export const SanchalakRoutes: Routes = [{
    path: '',
    children: [{
        path: 'sanchalak',
        component: SanchalakComponent
    }]
}];
