import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { retry, map,filter } from 'rxjs/operators';
import { Subscribable, Subscriber ,Subscription} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit,OnDestroy {


  subscription: Subscription;
  constructor() { 


  
    
   this.subscription= this.regresaObservable()
    .subscribe(
      numero=> console.log('Subs',numero),
      error=> console.log('Error en el obs',error),
      ()=>console.log('El observador termino!');


    )


  }

  ngOnInit() {
  }
  ngOnDestroy(){
    console.log("la pagina se va a cerrar");
    this.subscription.unsubscribe();
  }

  regresaObservable():Observable<any>{
    let contador =0;
    return new Observable((observer:Subscriber<any> )=> {


    let intervalo = setInterval( () => {

      contador ++ 1;
      const salida={
        valor: contador;
      }

      observer.next(salida);

      // if(contador === 3){
      //     clearInterval(intervalo);
      //   //observer.complete();
      //   }
      // if(contador === 2){
      //    // clearInterval(intervalo);
      //   observer.error('AUXILIO');
      //   }


    }, 1000)


    }).pipe(
      map(resp=>resp.valor),
      filter((valor,index)=>{
        if((valor%2)===1){
          return true;
        }
        else{return false}
      }


      )
    )
  }

}
