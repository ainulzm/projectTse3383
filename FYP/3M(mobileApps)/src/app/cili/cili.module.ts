import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CiliPageRoutingModule } from './cili-routing.module';

import { CiliPage } from './cili.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CiliPageRoutingModule
  ],
  declarations: [CiliPage]
})
export class CiliPageModule {}
