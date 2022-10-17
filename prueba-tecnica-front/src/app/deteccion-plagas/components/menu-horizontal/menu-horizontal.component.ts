import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-horizontal',
  templateUrl: './menu-horizontal.component.html',
  styleUrls: ['./menu-horizontal.component.scss'],
})
export class MenuHorizontalComponent implements OnInit {
  @Output() information = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  clickme(menssage: any) {
    this.information.emit(menssage);
  }
}
