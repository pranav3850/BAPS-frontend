import { Routes } from '@angular/router';
import { ProfessionInformationComponent } from './profession-information.component';
export const ProfessionRoutes: Routes = [{

    path: '',
    children: [{
      path: 'profession',
      component: ProfessionInformationComponent
  }]
}];
