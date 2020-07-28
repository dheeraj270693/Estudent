import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarksheetPageRoutingModule } from './marksheet-routing.module';

import { MarksheetPage } from './marksheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarksheetPageRoutingModule
  ],
  declarations: [MarksheetPage]
})
export class MarksheetPageModule {}
