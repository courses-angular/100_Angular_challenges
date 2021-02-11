import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComponentsDocumentationComponent} from './components/components-documentation/components-documentation.component';
import {DirectivesDocumentationComponent} from './directives/directives-documentation/directives-documentation.component';
import {PipesDocumentationComponent} from './pipes/pipes-documentation/pipes-documentation.component';
import {ServicesDocumentationComponent} from './services/services-documentation/services-documentation.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/components.module').then((m) => m.ComponentsModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule)
  },
  {
    path: 'other',
    loadChildren: () => import('./other/other.module').then(m => m.OtherModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/service.module').then(m => m.ServiceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
