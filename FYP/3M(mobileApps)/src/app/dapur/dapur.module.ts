import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DapurPageRoutingModule } from './dapur-routing.module';

import { DapurPage } from './dapur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DapurPageRoutingModule
  ],
  declarations: [DapurPage]
})
export class DapurPageModule {}
