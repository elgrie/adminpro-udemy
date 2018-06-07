import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _setting:SettingsService) { 

    //
  }

  ngOnInit() {
    this.colocarCheck();
  }
  cambiarColor(tema:string,link:any){
    console.log(tema);
    this.aplicarCheck(link);
    this._setting.aplicarTema(tema);
  }

  // deprecated se usa colocarCheck()
  aplicarCheck(link:any){
  let selectores:any=document.getElementsByClassName('selector');
  // remueve todos los wirking a excepcion del default
  for(let ref of selectores)
  {
    ref.classList.remove('working');
  }
  link.classList.add('working');
  }

  colocarCheck(){
    let selectores:any=document.getElementsByClassName('selector');
    // remueve todos los wirking a excepcion del default
      for(let ref of selectores)
      {
        if(ref.getAttribute('data-theme')===this._setting.ajustes.tema){
          ref.classList.add('working');
          break;
        }
        
      }
    }

}
