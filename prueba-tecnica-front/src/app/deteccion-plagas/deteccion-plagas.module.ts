import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeteccionPlagasRoutingModule } from './deteccion-plagas-routing.module';
import { DeteccionPlagasComponent } from './deteccion-plagas.component';
import { MenuVerticalComponent } from './components/menu-vertical/menu-vertical.component';
import { MenuHorizontalComponent } from './components/menu-horizontal/menu-horizontal.component';
import { ContentPlagasComponent } from './components/content-plagas/content-plagas.component';


@NgModule({
  declarations: [
    DeteccionPlagasComponent,
    MenuVerticalComponent,
    MenuHorizontalComponent,
    ContentPlagasComponent
  ],
  imports: [
    CommonModule,
    DeteccionPlagasRoutingModule
  ]
})
export class DeteccionPlagasModule { }
