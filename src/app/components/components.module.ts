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
    ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ]
})
export class ComponentsModule { }
