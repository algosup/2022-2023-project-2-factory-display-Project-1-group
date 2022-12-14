import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomRessourcePageRoutingModule } from './custom-ressource-routing.module';

import { CustomRessourcePage } from './custom-ressource.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomRessourcePageRoutingModule
  ],
  declarations: [CustomRessourcePage]
})
export class CustomRessourcePageModule {}
