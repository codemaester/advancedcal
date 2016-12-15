import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }  from './about.component';
import { SchedulerComponent }  from './scheduler.component';
import { RoomComponent }       from './room.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'scheduler',
    component: SchedulerComponent
  },
  {
    path: 'room',
    component: RoomComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
