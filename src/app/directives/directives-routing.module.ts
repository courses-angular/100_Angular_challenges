import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DirectivesDocumentationComponent} from './directives-documentation/directives-documentation.component';

const routes: Routes = [
  {path: '', component: DirectivesDocumentationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule {
}
