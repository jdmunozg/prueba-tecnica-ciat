import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-vertical',
  templateUrl: './menu-vertical.component.html',
  styleUrls: ['./menu-vertical.component.scss'],
})
export class MenuVerticalComponent implements OnInit {
  @Input() subCategories: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.subCategories);
  }
}
