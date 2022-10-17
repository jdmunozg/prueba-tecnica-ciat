import { Component, OnInit } from '@angular/core';
import { menu } from './metadata/info-menu-plaga';

@Component({
  selector: 'app-deteccion-plagas',
  templateUrl: './deteccion-plagas.component.html',
  styleUrls: ['./deteccion-plagas.component.scss'],
})
export class DeteccionPlagasComponent implements OnInit {
  informacionComp: any;
  informacionMenuVertical: any;
  constructor() {
    let aux = menu;
    if (this.informacionComp == undefined) {
      aux.find((x: any) => {
        if (x.menu == 'plaga') {
          this.informacionMenuVertical = x;
        }
      });
    }
  }

  ngOnInit(): void {}
  getMensaje(e: any) {
    let aux = menu;
    this.informacionComp = e;
    aux.find((x: any) => {
      if (x.menu == this.informacionComp) {
        this.informacionMenuVertical = x;
      }
    });
  }
}
