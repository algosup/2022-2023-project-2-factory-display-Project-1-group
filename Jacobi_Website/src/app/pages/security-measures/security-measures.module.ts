import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityMeasuresPageRoutingModule } from './security-measures-routing.module';

import { SecurityMeasuresPage } from './security-measures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecurityMeasuresPageRoutingModule
  ],
  declarations: [SecurityMeasuresPage]
})
export class SecurityMeasuresPageModule {}
