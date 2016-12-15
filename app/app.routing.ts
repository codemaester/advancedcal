import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent }  from './signin.component';
import { SignoutComponent }  from './signout.component';
import { SchedulerComponent }  from './scheduler.component';
import { RoomComponent }       from './room.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signout',
    component: SignoutComponent
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
