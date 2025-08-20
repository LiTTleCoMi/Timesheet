import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Departments } from '../components/departments/departments';
import { Timesheet } from '../components/timesheet/timesheet';
import { Analytics } from '../components/analytics/analytics';

const routes: Routes = [
  { path: '', redirectTo: 'departments', pathMatch: 'full' },
  { path: 'departments', component: Departments },
  { path: 'timesheet', component: Timesheet },
  { path: 'analytics', component: Analytics },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
