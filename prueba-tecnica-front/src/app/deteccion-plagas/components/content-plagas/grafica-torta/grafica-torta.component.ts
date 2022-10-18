import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-grafica-torta',
  templateUrl: './grafica-torta.component.html',
  styleUrls: ['./grafica-torta.component.scss'],
})
export class GraficaTortaComponent implements OnInit {
  @Input() pieChartLabels: any;
  @Input() pieChartDatasets: any;
  title = 'ng2-charts-demo';

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor() {}

  ngOnInit(): void {}
}
