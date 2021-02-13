import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import {AccordionComponent} from './accordion/accordion.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {StarRatingsComponent} from './star-ratings/star-ratings.component';
import {SharedModule} from '../shared/shared.module';
import { LoaderComponent } from './loader/loader.component';
import { CreditCardInputComponent } from './creadit-card-input/credit-card-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoaderV2Component } from './loader-v2/loader-v2.component';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import {LinkedInPostComponent} from './linked-in-post/linked-in-post.component';
import { ModalComponent } from './modal/modal.component';
import { QuoteComponent } from './quote/quote.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ReachTextViewerComponent } from './reach-text-viewer/reach-text-viewer.component';
import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { SearchListComponent } from './search-list/search-list.component';
import {PipesModule} from '../pipes/pipes.module';
import { CounterComponent } from './counter/counter.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TabsComponent } from './tabs/tabs.component';
import {ComponentsDocumentationComponent} from './components-documentation/components-documentation.component';
import {DirectivesModule} from '../directives/directives.module';
import {SortTableComponent} from './sort-table/sort-table.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { BannerCutOutComponent } from './banner-cut-out/banner-cut-out.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SimplePopupComponent } from './simple-popup/simple-popup.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';


@NgModule({
  declarations: [
    ComponentsDocumentationComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    LoaderComponent,
    CreditCardInputComponent,
    LoaderV2Component,
    TwitterPostComponent,
    LinkedInPostComponent,
    ModalComponent,
    QuoteComponent,
    ToggleComponent,
    ReachTextViewerComponent,
    DebounceSearchComponent,
    SearchListComponent,
    CounterComponent,
    SimpleTableComponent,
    PaginationComponent,
    TabsComponent,
    SortTableComponent,
    EmailFormComponent,
    RibbonComponent,
    ButtonToggleComponent,
    BannerCutOutComponent,
    SnackbarComponent,
    SimplePopupComponent,
    CountdownTimerComponent,
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    DirectivesModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ]
})
export class ComponentsModule { }
