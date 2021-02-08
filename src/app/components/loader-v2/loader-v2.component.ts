import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'yl-loader-v2',
  templateUrl: './loader-v2.component.html',
  styleUrls: ['./loader-v2.component.scss']
})
export class LoaderV2Component implements OnInit {
  @Input()isLoading: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
