import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KuihPage } from './kuih.page';

const routes: Routes = [
  {
    path: '',
    component: KuihPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KuihPageRoutingModule {}
