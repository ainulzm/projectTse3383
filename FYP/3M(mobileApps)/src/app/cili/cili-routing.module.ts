import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CiliPage } from './cili.page';

const routes: Routes = [
  {
    path: '',
    component: CiliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CiliPageRoutingModule {}
