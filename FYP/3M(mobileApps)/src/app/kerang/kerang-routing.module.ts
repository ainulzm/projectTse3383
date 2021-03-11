import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KerangPage } from './kerang.page';

const routes: Routes = [
  {
    path: '',
    component: KerangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KerangPageRoutingModule {}
