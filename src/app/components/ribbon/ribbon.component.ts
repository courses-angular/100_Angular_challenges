import {Component, Input, OnInit} from '@angular/core';
import {RibbonType} from './ribbon-type';
import {RibbonLocation} from './ribbon-location';

@Component({
  selector: 'yl-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss']
})
export class RibbonComponent implements OnInit {
@Input()content: string = '';
@Input()location: RibbonLocation = RibbonLocation.BottomLeft;
@Input()type: RibbonType = RibbonType.Success;
  constructor() { }

  ngOnInit(): void {
  }

}
