import { Component, Input, OnInit } from '@angular/core';
import { PlagasService } from '../../services/plagas.service';

@Component({
  selector: 'app-content-palma',
  templateUrl: './content-palma.component.html',
  styleUrls: ['./content-palma.component.scss'],
})
export class ContentPalmaComponent implements OnInit {
  @Input() subCategories: any;
  informacion: any;
  estado: boolean = true;
  constructor(private _plagasServices: PlagasService) {}

  ngOnInit(): void {
    this._plagasServices.getAllPalmera().subscribe((resp) => {
      this.informacion = resp;
    });

    setTimeout(() => {
      this.estado = false;
    }, 2000);
  }
}
