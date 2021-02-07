import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'yl-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
@Input()value: number = 0;
@Input()maxValue: number = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
