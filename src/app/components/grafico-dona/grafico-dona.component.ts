import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

 @Input() public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
 @Input() public pieChartData:number[] = [300, 500, 100];
 @Input() public pieChartType:string = 'pie';

 
  constructor() { }

  ngOnInit() {
  }

}
