import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';



@NgModule({

declarations: [
Graficas1Component,
DashboardComponent,
ProgressComponent,
PagesComponent

],
exports: [
    Graficas1Component,
    DashboardComponent,
    ProgressComponent,
    PagesComponent
],
imports: [SharedModule,
PAGES_ROUTES],



    })

export class PagesModule {}
