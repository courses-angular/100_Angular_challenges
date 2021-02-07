import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentsDocumentationComponent} from './components-documentation/components-documentation.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsDocumentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
