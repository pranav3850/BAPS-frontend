import { Routes } from '@angular/router';
import { ProfessionInformationComponent } from './profession-information.component';


export const DashboardRoutes: Routes = [{

    path: '',
    children: [ {
      path: 'profession-information',
      component: ProfessionInformationComponent
  }]
}];
