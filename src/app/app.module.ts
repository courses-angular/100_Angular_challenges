import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {CardComponent} from './components/card/card.component';
import {AccordionComponent} from './components/accordion/accordion.component';
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';
import {StarRatingsComponent} from './components/star-ratings/star-ratings.component';
import {TopOfPageComponent} from './components/top-of-page/top-of-page.component';
import {ComponentsDocumentationComponent} from './components/components-documentation/components-documentation.component';
import {PipesDocumentationComponent} from './pipes/pipes-documentation/pipes-documentation.component';
import {DirectivesDocumentationComponent} from './directives/directives-documentation/directives-documentation.component';
import {ServicesDocumentationComponent} from './services/services-documentation/services-documentation.component';
import {PipesModule} from './pipes/pipes.module';
import {DirectivesModule} from './directives/directives.module';
import {SharedModule} from './shared/shared.module';
import {ComponentsModule} from './components/components.module';


@NgModule({
  declarations: [
    ComponentsDocumentationComponent,
    DirectivesDocumentationComponent,
    ServicesDocumentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivesModule,
    SharedModule,
    ComponentsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
