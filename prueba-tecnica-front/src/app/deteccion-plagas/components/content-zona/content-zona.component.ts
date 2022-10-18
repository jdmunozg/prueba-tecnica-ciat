import { Component, Input, OnInit } from '@angular/core';
import { PlagasService } from '../../services/plagas.service';

@Component({
  selector: 'app-content-zona',
  templateUrl: './content-zona.component.html',
  styleUrls: ['./content-zona.component.scss'],
})
export class ContentZonaComponent implements OnInit {
  @Input() subCategories: any;
  informacion: any;
  palmas: any;
  cultivo: any;
  estado: boolean = true;

  public pieChartLabels: any = [];
  public pieChartDatasets: any = [
    {
      data: [],
    },
  ];
  public infoData: any = [];
  public infoDataDos: any = [];
  constructor(private _plagasServices: PlagasService) {}

  ngOnInit(): void {
    this._plagasServices.getAllPlaga().subscribe((resp) => {
      this.informacion = resp;
    });
    this._plagasServices.getAllPalmera().subscribe((resp) => {
      this.palmas = resp;
    });

    this._plagasServices.getAllZona().subscribe((resp) => {
      this.cultivo = resp;
    });
    setTimeout(() => {
      for (let i of this.cultivo) {
        this.pieChartLabels.push(i.nombre);
      }
      for (let i of this.cultivo) {
        let contador = 0;
        for (let k of this.palmas) {
          if (k.id_zona.nombre == i.nombre) {
            contador = contador + 1;
          }
        }
        this.pieChartDatasets[0].data.push(contador);
      }
      let auxSana = [];
      let auxNoSana = [];
      for (let i of this.cultivo) {
        let contadorSana = 0;
        let contador = 0;
        for (let k of this.palmas) {
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

      for (let i of this.informacion) {
        let auxiliar = [];
        for (let k of this.cultivo) {
          let contador = 0;
          for (let j of this.palmas) {
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
      this.estado = false;
    }, 2000);
  }
}
