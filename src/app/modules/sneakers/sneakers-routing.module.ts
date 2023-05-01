import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SneakersComponent } from './containers/sneakers/sneakers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sneakers',
    pathMatch: 'full',
  },
  {
    path: 'sneakers',
    component: SneakersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SneakersRoutingModule {}
