import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ServicesDocumentationComponent} from './services-documentation/services-documentation.component';
import {SharedModule} from '../shared/shared.module';
import {UserService} from './user/user.service';
import {LocalStorageService} from './local-storage/local-storage.service';


@NgModule({
  declarations: [ServicesDocumentationComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    SharedModule

  ],
  providers: [
    UserService,
    LocalStorageService,
    {
      provide: 'LocalStorage', useValue: window.localStorage
    }
  ]
})
export class ServiceModule { }
