import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {
  ajustes:Ajustes= {
    temaUl:'assets/css/colors/default-dark.css',
    tema:'default'
  }

  constructor(@Inject(DOCUMENT)private _document) { 
    this.cargarAjustes();
  }

  guardarAjustes() {
    // console.log('Guardado en el local Storage');
    localStorage.setItem('ajustes',JSON.stringify(this.ajustes));
  }

  cargarAjustes(){
 //se fija si ya hay ajustes guardados en la variable ajustes del local storage
    if(localStorage.getItem('ajustes'))
    { // console.log("Cargando data");
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
    }else{
     // console.log('No hay datos');
      this.aplicarTema(this.ajustes.tema);
    }
  }
  aplicarTema(tema:string){
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);
    this.ajustes.temaUl = url;
    this.ajustes.tema = tema;

    this.guardarAjustes();
  }


}

interface Ajustes {
    temaUl: string;
    tema: string;
}
