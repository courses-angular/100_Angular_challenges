import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'yl-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
@Input()isShow: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
