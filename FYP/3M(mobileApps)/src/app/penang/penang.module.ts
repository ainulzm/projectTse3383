import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PenangPageRoutingModule } from './penang-routing.module';

import { PenangPage } from './penang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PenangPageRoutingModule
  ],
  declarations: [PenangPage]
})
export class PenangPageModule {}
