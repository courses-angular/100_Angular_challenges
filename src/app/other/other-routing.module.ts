import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OtherDocumentationComponent} from './other-documentation/other-documentation.component';

const routes: Routes = [
  {
    path: '',
    component: OtherDocumentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
