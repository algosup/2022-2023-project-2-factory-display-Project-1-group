import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomRessourcePage } from './custom-ressource.page';

const routes: Routes = [
  {
    path: '',
    component: CustomRessourcePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomRessourcePageRoutingModule {}
