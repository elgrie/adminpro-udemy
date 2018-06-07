import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideBarService, SharedService, SettingsService} from './service.index';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers:[
  SideBarService,
  SharedService,
  SettingsService
  ],
  declarations: []
})
export class ServiceModule { }
