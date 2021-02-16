import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'yl-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {
  isShow: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onShow(): void {
    this.isShow = true;
  }

  onHide(): void {
    this.isShow = false;
  }

}
