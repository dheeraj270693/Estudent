import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T2202Page } from './t2202.page';

const routes: Routes = [
  {
    path: '',
    component: T2202Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T2202PageRoutingModule {}
