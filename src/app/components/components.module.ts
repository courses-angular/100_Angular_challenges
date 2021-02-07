import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import {AppComponent} from '../app.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {CardComponent} from './card/card.component';
import {AccordionComponent} from './accordion/accordion.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {StarRatingsComponent} from './star-ratings/star-ratings.component';
import {TopOfPageComponent} from './top-of-page/top-of-page.component';
import {SharedModule} from '../shared/shared.module';
import { LoaderComponent } from './loader/loader.component';
import { CreaditCardInputComponent } from './creadit-card-input/creadit-card-input.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    TopOfPageComponent,
    LoaderComponent,
    CreaditCardInputComponent,
  ],
  exports: [
    ToolbarComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    TopOfPageComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule
  ]
})
export class ComponentsModule { }
