import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { PlagasService } from '../../services/plagas.service';
import { info, palma, zona } from './metadata';

@Component({
  selector: 'app-content-plagas',
  templateUrl: './content-plagas.component.html',
  styleUrls: ['./content-plagas.component.scss'],
})
export class ContentPlagasComponent implements OnInit {
  @Input() subCategories: any;
  informacion: any;
  palmas: any;

  public pieChartLabels: any = [];
  public pieChartDatasets: any = [
    {
      data: [],
    },
  ];
  public infoData: any = [];

  constructor(private _plagasServices: PlagasService) {}

  ngOnInit(): void {
    this.informacion = info;
    this.palmas = palma;
    for (let i of this.informacion) {
      this.pieChartLabels.push(i.nombre);
    }

    for (let f of this.informacion) {
      let contador = 0;
      for (let g of this.palmas) {
        if (g.id_plaga != null) {
          if (g.id_plaga.nombre == f.nombre) {
            contador = contador + 1;
          }
        }
      }
      this.pieChartDatasets[0].data.push(contador);
    }

    for (let k of zona) {
      let aux = [];
      for (let j of this.informacion) {
        let contador = 0;
        for (let g of this.palmas) {
          if (g.id_plaga != null) {
            if (g.id_zona.nombre == k.nombre) {
              if (g.id_plaga.nombre == j.nombre) {
                contador = contador + 1;
              }
            }
          }
        }
        aux.push(contador);
      }
      this.infoData.push({ data: aux, label: k.nombre });
    }
    console.log(this.infoData);
  }
}
