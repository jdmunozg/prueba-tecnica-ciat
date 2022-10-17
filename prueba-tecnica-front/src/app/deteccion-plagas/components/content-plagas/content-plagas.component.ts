import { Component, Input, OnInit } from '@angular/core';
import { PlagasService } from '../../services/plagas.service';
import { info } from './metadata';

@Component({
  selector: 'app-content-plagas',
  templateUrl: './content-plagas.component.html',
  styleUrls: ['./content-plagas.component.scss'],
})
export class ContentPlagasComponent implements OnInit {
  @Input() subCategories: any;
  informacion: any;
  constructor(private _plagasServices: PlagasService) {}

  ngOnInit(): void {
    this.informacion = info;
  }
}
