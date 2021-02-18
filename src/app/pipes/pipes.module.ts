import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PipesRoutingModule} from './pipes-routing.module';
import {PipesDocumentationComponent} from './pipes-documentation/pipes-documentation.component';
import {TruncatePipe} from './truncate-pipe/truncate.pipe';
import {SharedModule} from '../shared/shared.module';
import { CreditCardFormatterPipe } from './credit-card/credit-card-formatter.pipe';
import { FlattenPipe } from './flatten-pipe/flatten.pipe';
import { FilterTermPipe } from './filter-term/filter-term.pipe';
import { RichTextPipe } from './rich-text/rich-text.pipe';
import { SortByDirectionPipe } from './sort-by-direction/sort-by-direction.pipe';


@NgModule({
  declarations: [PipesDocumentationComponent, TruncatePipe, CreditCardFormatterPipe, FlattenPipe, FilterTermPipe, RichTextPipe, SortByDirectionPipe],
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule
  ],
  exports: [PipesDocumentationComponent, FilterTermPipe]
})
export class PipesModule {
}
