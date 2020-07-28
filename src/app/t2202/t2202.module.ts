import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T2202PageRoutingModule } from './t2202-routing.module';

import { T2202Page } from './t2202.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T2202PageRoutingModule
  ],
  declarations: [T2202Page]
})
export class T2202PageModule {}
