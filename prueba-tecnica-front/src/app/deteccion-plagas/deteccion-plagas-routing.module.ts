import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeteccionPlagasComponent } from './deteccion-plagas.component';

const routes: Routes = [
  {
    path: '',
    component: DeteccionPlagasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeteccionPlagasRoutingModule {}
