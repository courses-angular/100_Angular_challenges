import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PipesRoutingModule} from './pipes-routing.module';
import {PipesDocumentationComponent} from './pipes-documentation/pipes-documentation.component';
import {TruncatePipe} from './truncate-pipe/truncate.pipe';
import {SharedModule} from '../shared/shared.module';
import { CreditCardFormatterPipe } from './credit-card/credit-card-formatter.pipe';
import { FlattenPipe } from './flatten-pipe/flatten.pipe';


@NgModule({
  declarations: [PipesDocumentationComponent, TruncatePipe, CreditCardFormatterPipe, FlattenPipe],
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule
  ],
  exports: [PipesDocumentationComponent]
})
export class PipesModule {
}
