import { Routes } from '@angular/router';
import { HaribhaktComponent } from './haribhakt.component';


export const HaribhaktRoutes: Routes = [{
    path: '',
    children: [{
        path: 'haribhakt',
        component: HaribhaktComponent
    }]
}];
