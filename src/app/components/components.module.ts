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
import { CreditCardInputComponent } from './creadit-card-input/credit-card-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoaderV2Component } from './loader-v2/loader-v2.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    TopOfPageComponent,
    LoaderComponent,
    CreditCardInputComponent,
    LoaderV2Component,
  ],
  exports: [
    ToolbarComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    TopOfPageComponent,
    LoaderComponent,
    CreditCardInputComponent,
    LoaderV2Component,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
