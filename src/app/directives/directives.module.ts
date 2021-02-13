import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';
import {SharedModule} from '../shared/shared.module';
import { RippleDirective } from './ripple/ripple.directive';
import {DirectivesDocumentationComponent} from './directives-documentation/directives-documentation.component';
import { ScaleDirective } from './scale/scale.directive';


@NgModule({
  declarations: [DirectivesDocumentationComponent,DebounceClickDirective, RippleDirective, ScaleDirective],
    exports: [
        DebounceClickDirective,
        RippleDirective
    ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    SharedModule
  ]
})
export class DirectivesModule { }
