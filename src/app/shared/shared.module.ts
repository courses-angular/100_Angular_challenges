import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from '../components/card/card.component';
import {SnackbarComponent} from '../components/snackbar/snackbar.component';
import {TabsComponent} from '../components/tabs/tabs.component';



@NgModule({
  declarations: [
    CardComponent,
    SnackbarComponent,
    TabsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    SnackbarComponent,
    TabsComponent
  ]
})
export class SharedModule { }
