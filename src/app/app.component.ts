import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // tslint:disable-next-line:max-line-length
  // con solo llamar al setting service se dsopara el constructor del servicio. con lo cual debo inicializar la funcion tambien en el constructor
  // de settingService en settings.service.ts
  constructor(public _settings:SettingsService){}
  }
