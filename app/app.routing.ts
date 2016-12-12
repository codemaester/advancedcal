import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulerComponent }  from './scheduler.component';
import { RoomComponent }       from './room.component';

const appRoutes: Routes = [
  {
    path: 'logged-in.html',
    redirectTo: '/scheduler',
    pathMatch: 'full'
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
