import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'deteccion',
    loadChildren: () =>
      import('./deteccion-plagas/deteccion-plagas.module').then(
        (m) => m.DeteccionPlagasModule
      ),
  },
  {
    redirectTo: 'deteccion',
    path: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
