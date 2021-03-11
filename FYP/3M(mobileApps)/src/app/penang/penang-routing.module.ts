import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PenangPage } from './penang.page';

const routes: Routes = [
  {
    path: '',
    component: PenangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PenangPageRoutingModule {}
