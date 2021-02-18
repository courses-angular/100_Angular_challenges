import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComponentsDocumentationComponent} from './components/components-documentation/components-documentation.component';
import {DirectivesDocumentationComponent} from './directives/directives-documentation/directives-documentation.component';
import {PipesDocumentationComponent} from './pipes/pipes-documentation/pipes-documentation.component';
import {ServicesDocumentationComponent} from './services/services-documentation/services-documentation.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/components.module').then((m) => m.ComponentsModule),
    data: {title: 'Components'}
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule),
    data: {title: 'Directives'}
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule),
    data: {title: 'Pipes'}
  },
  {
    path: 'other',
    loadChildren: () => import('./other/other.module').then(m => m.OtherModule),
    data: {title: 'Others'}
  },
  {
    path: 'services',
    loadChildren: () => import('./services/service.module').then(m => m.ServiceModule),
    data: {title: 'Services'}
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
