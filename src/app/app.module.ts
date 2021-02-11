import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ComponentsDocumentationComponent} from './components/components-documentation/components-documentation.component';
import {DirectivesDocumentationComponent} from './directives/directives-documentation/directives-documentation.component';
import {ServicesDocumentationComponent} from './services/services-documentation/services-documentation.component';
import {DirectivesModule} from './directives/directives.module';
import {SharedModule} from './shared/shared.module';
import {ComponentsModule} from './components/components.module';
import {OtherDocumentationComponent} from './other/other-documentation/other-documentation.component';
import {OtherModule} from './other/other.module';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {TopOfPageComponent} from './components/top-of-page/top-of-page.component';
import {PipesModule} from './pipes/pipes.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ServiceModule} from './services/service.module';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TopOfPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DirectivesModule,
    SharedModule,
    ComponentsModule,
    OtherModule,
    PipesModule,
    ServiceModule,
    HttpClientModule

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
