import { Routes } from '@angular/router';
import { HomeComponent } from './user-components/home/home.component';
import { DashboardComponent } from './user-components/dashboard/dashboard.component';

export const routes: Routes = [

    {
        path: '', component: HomeComponent,
        children: [{
            path: '', component: DashboardComponent
        }]
    }

];
