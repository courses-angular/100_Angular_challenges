import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OtherDocumentationComponent} from './other-documentation/other-documentation.component';
import {FormDirtyGuard} from './guards/form-dirty.guard';

const routes: Routes = [
  {
    path: '',
    component: OtherDocumentationComponent,
    canDeactivate: [FormDirtyGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
