import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KuihPageRoutingModule } from './kuih-routing.module';

import { KuihPage } from './kuih.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KuihPageRoutingModule
  ],
  declarations: [KuihPage]
})
export class KuihPageModule {}
