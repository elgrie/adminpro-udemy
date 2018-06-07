import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

 @Input() porcentaje: number =50;
 @Input() leyenda: string="Leyenda2";
 @ViewChild('txtProgress')txtProgress:ElementRef;
 //ouyput es un evento
 @Output() cambioValor:EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  cambiarPorcentaje(valor){

    if(this.porcentaje <= 95 && valor>0){
      this.porcentaje += valor;
      this.cambioValor.emit(this.porcentaje);
    }
    if (this.porcentaje >= 5 && valor < 0){
      this.porcentaje += valor;
      this.cambioValor.emit(this.porcentaje);
    }
    if (this.porcentaje < 0 && valor < 0){
      return;
    }
  }

  onChanges(newValue:number)
  {
    //let elemHTML:any=document.getElementsByName('porcentaje')[0];
    //console.log(this.txtProgress)

    if(newValue>=100){
    this.porcentaje=100;
    } else if(newValue<0){
      this.porcentaje=0;
    }else{
      this.porcentaje=newValue;
    }
    //elemHTML.value=this.porcentaje;
    this.txtProgress.nativeElement.value=this.porcentaje;

    this.txtProgress.nativeElement.focus();
    this.cambioValor.emit(this.porcentaje);
    
  }


}
