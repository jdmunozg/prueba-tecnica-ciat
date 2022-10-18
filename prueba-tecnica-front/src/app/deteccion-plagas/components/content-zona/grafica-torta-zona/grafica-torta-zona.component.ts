import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-grafica-torta-zona',
  templateUrl: './grafica-torta-zona.component.html',
  styleUrls: ['./grafica-torta-zona.component.scss'],
})
export class GraficaTortaZonaComponent implements OnInit {
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
