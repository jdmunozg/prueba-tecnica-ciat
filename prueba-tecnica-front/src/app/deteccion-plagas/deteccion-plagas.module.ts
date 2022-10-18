import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { DeteccionPlagasRoutingModule } from './deteccion-plagas-routing.module';
import { DeteccionPlagasComponent } from './deteccion-plagas.component';
import { MenuVerticalComponent } from './components/menu-vertical/menu-vertical.component';
import { MenuHorizontalComponent } from './components/menu-horizontal/menu-horizontal.component';
import { ContentPlagasComponent } from './components/content-plagas/content-plagas.component';
import { GraficaBarrasComponent } from './components/content-plagas/grafica-barras/grafica-barras.component';
import { GraficaTortaComponent } from './components/content-plagas/grafica-torta/grafica-torta.component';
import { ContentZonaComponent } from './components/content-zona/content-zona.component';
import { GraficaTortaZonaComponent } from './components/content-zona/grafica-torta-zona/grafica-torta-zona.component';
import { GraficaBarraZonaComponent } from './components/content-zona/grafica-barra-zona/grafica-barra-zona.component';
import { GraficaBarraPlagaZonaComponent } from './components/content-zona/grafica-barra-plaga-zona/grafica-barra-plaga-zona.component';
import { ContentPalmaComponent } from './components/content-palma/content-palma.component';

@NgModule({
  declarations: [
    DeteccionPlagasComponent,
    MenuVerticalComponent,
    MenuHorizontalComponent,
    ContentPlagasComponent,
    GraficaBarrasComponent,
    GraficaTortaComponent,
    ContentZonaComponent,
    GraficaTortaZonaComponent,
    GraficaBarraZonaComponent,
    GraficaBarraPlagaZonaComponent,
    ContentPalmaComponent,
  ],
  imports: [CommonModule, DeteccionPlagasRoutingModule, NgChartsModule],
})
export class DeteccionPlagasModule {}
