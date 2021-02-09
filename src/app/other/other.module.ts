import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OtherRoutingModule} from './other-routing.module';
import {SharedModule} from '../shared/shared.module';
import {OtherDocumentationComponent} from './other-documentation/other-documentation.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [OtherDocumentationComponent],
  imports: [
    CommonModule,
    OtherRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class OtherModule {
}
