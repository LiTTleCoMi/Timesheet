import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from '../app';

import { Analytics } from '../components/analytics/analytics';
import { AnalyticsTable } from '../components/analytics-table/analytics-table';
import { Departments } from '../components/departments/departments';
import { Timesheet } from '../components/timesheet/timesheet';
import { TopNavbar } from '../components/top-navbar/top-navbar';
import { MaterialModule } from './material-module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Departments, Analytics, AnalyticsTable, Timesheet, TopNavbar],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})

export class AppModule {}
