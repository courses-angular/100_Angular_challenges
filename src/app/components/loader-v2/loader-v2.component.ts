import {Component, Input, OnInit} from '@angular/core';
import {LoaderType} from '../models/loader-type';

@Component({
  selector: 'yl-loader-v2',
  templateUrl: './loader-v2.component.html',
  styleUrls: ['./loader-v2.component.scss']
})
export class LoaderV2Component implements OnInit {
  @Input() isLoading: boolean = false;
  @Input() loaderType: LoaderType = LoaderType.Circular;
  public LoaderType = LoaderType;
  private loading: string = 'Loading';
  private loadingPeriods: string = '.\0\0';

  constructor() {
  }

  ngOnInit(): void {
    if (this.loaderType === LoaderType.Loading) {
      this.updateLoaderPeriods();
    }
  }

  public get loadingText(): string {
    return `${this.loading} ${this.loadingPeriods}`;
  }

  private updateLoaderPeriods(): void {
    let currentStep = 0;
    setInterval(() => {
      switch (currentStep % 3) {
        case 0 :
          this.loadingPeriods = '..\0';
          currentStep++;
          break;
        case 1:
          this.loadingPeriods = '...';
          currentStep++;
          break;
        case 2:
          this.loadingPeriods = '.\0\0';
          currentStep = 0;
          break;
      }
    }, 500);
  }

}
