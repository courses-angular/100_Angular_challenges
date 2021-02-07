import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PipesRoutingModule} from './pipes-routing.module';
import {PipesDocumentationComponent} from './pipes-documentation/pipes-documentation.component';
import {TruncatePipe} from './truncate.pipe';
import {AppModule} from '../app.module';
import {CardComponent} from '../components/card/card.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [PipesDocumentationComponent, TruncatePipe],
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule
  ],
  exports: [PipesDocumentationComponent]
})
export class PipesModule {
}
