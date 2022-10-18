import { Component, Input, OnInit } from '@angular/core';
import { palma, zona, info } from './metadata';

@Component({
  selector: 'app-content-zona',
  templateUrl: './content-zona.component.html',
  styleUrls: ['./content-zona.component.scss'],
})
export class ContentZonaComponent implements OnInit {
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
  public infoDataDos: any = [];
  constructor() {}

  ngOnInit(): void {
    this.informacion = zona;
    for (let i of this.informacion) {
      this.pieChartLabels.push(i.nombre);
    }
    for (let i of this.informacion) {
      let contador = 0;
      for (let k of palma) {
        if (k.id_zona.nombre == i.nombre) {
          contador = contador + 1;
        }
      }
      this.pieChartDatasets[0].data.push(contador);
    }
    let auxSana = [];
    let auxNoSana = [];
    for (let i of this.informacion) {
      let contadorSana = 0;
      let contador = 0;
      for (let k of palma) {
        if (k.id_zona.nombre == i.nombre) {
          if (k.id_plaga == null) {
            contadorSana = contadorSana + 1;
          } else {
            contador = contador + 1;
          }
        }
      }
      auxNoSana.push(contador);
      auxSana.push(contadorSana);
    }
    this.infoData.push({ data: auxSana, label: 'Sin Plaga' });
    this.infoData.push({ data: auxNoSana, label: 'Con Plaga' });

    for (let i of info) {
      let auxiliar = [];
      for (let k of this.informacion) {
        let contador = 0;
        for (let j of palma) {
          if (j.id_zona.nombre == k.nombre) {
            if (j.id_plaga != null) {
              if (j.id_plaga.nombre == i.nombre) {
                contador = contador + 1;
              }
            }
          }
        }
        auxiliar.push(contador);
      }
      this.infoDataDos.push({ data: auxiliar, label: i.nombre });
    }
  }
}
