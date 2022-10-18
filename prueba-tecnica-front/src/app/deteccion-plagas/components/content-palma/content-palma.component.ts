import { Component, Input, OnInit } from '@angular/core';
import { palma } from '../content-zona/metadata';

@Component({
  selector: 'app-content-palma',
  templateUrl: './content-palma.component.html',
  styleUrls: ['./content-palma.component.scss'],
})
export class ContentPalmaComponent implements OnInit {
  @Input() subCategories: any;
  informacion: any;
  constructor() {}

  ngOnInit(): void {
    this.informacion = palma;
    console.log(this.informacion);
  }
}
