import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-grafica-barra-plaga-zona',
  templateUrl: './grafica-barra-plaga-zona.component.html',
  styleUrls: ['./grafica-barra-plaga-zona.component.scss'],
})
export class GraficaBarraPlagaZonaComponent implements OnInit {
  @Input() labelsInfo: any;
  @Input() infonumber: any;
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
  constructor() {}

  ngOnInit(): void {
    this.barChartData.labels = this.labelsInfo;
    this.barChartData.datasets = this.infonumber;
  }
}
