import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ServicesDocumentationComponent} from './services-documentation/services-documentation.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [ServicesDocumentationComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    SharedModule

  ]
})
export class ServiceModule { }
