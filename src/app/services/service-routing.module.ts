import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ServicesDocumentationComponent} from './services-documentation/services-documentation.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesDocumentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class ServiceRoutingModule {
}
