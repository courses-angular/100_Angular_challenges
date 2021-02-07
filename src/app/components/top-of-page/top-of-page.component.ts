import {Component, HostListener, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'yl-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss']
})
export class TopOfPageComponent implements OnInit {
  public isShow = false;
  @HostListener('window: scroll') onWindowScroll(): void {
    console.log('scrolling');
    // get y coordinate of window on scroll
    const yCoordinate = this.viewPostScroller.getScrollPosition()[1];
    console.log(yCoordinate);
    this.isShow = yCoordinate > 400;

  }

  constructor(private viewPostScroller: ViewportScroller) {
  }

  ngOnInit(): void {
  }

  goToTop(): void {
    this.viewPostScroller.scrollToPosition([0, 0]);
  }
}
