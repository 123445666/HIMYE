import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputDataFormComponent } from './layout/input-data-form/input-data-form.component';
import { TableDataFormComponent } from './layout/table-data-form/table-data-form.component';

const routes: Routes = [
  {
    path: '',
    component: InputDataFormComponent,
  },
  {
    path: 'company/:name',
    component: TableDataFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
