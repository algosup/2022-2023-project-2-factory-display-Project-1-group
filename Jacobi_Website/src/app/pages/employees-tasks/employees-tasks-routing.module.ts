import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesTasksPage } from './employees-tasks.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeesTasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesTasksPageRoutingModule {}
