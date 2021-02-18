import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from '../components/card/card.component';
import {SnackbarComponent} from '../components/snackbar/snackbar.component';
import {TabsComponent} from '../components/tabs/tabs.component';
import {BannerCutOutComponent} from '../components/banner-cut-out/banner-cut-out.component';



@NgModule({
  declarations: [
    CardComponent,
    SnackbarComponent,
    TabsComponent,
    BannerCutOutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    SnackbarComponent,
    TabsComponent,
    BannerCutOutComponent
  ]
})
export class SharedModule { }
