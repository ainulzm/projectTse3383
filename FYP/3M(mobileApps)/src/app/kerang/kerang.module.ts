import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KerangPageRoutingModule } from './kerang-routing.module';

import { KerangPage } from './kerang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KerangPageRoutingModule
  ],
  declarations: [KerangPage]
})
export class KerangPageModule {}
