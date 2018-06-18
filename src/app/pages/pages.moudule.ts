import { PromesasComponent } from './promesas/promesas.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { FormsModule } from '@angular/forms';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RxjsComponent } from './rxjs.component';







@NgModule({

declarations: [
Graficas1Component,
DashboardComponent,
ProgressComponent,
PagesComponent,
IncrementadorComponent,
GraficoDonaComponent,
AccountSettingsComponent,
PromesasComponent,
RxjsComponent
],
exports: [
    Graficas1Component,
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent
],
imports: [SharedModule,
FormsModule,
PAGES_ROUTES,
ChartsModule
],
    })

export class PagesModule {}
