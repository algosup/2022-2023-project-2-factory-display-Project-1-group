import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeesTasksPageRoutingModule } from './employees-tasks-routing.module';

import { EmployeesTasksPage } from './employees-tasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeesTasksPageRoutingModule
  ],
  declarations: [EmployeesTasksPage]
})
export class EmployeesTasksPageModule {}
