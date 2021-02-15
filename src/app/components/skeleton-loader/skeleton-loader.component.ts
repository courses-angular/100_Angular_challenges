import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'yl-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent implements OnInit {
  @Input() width: string = '100%';
  @Input() height: string = '100%';

  public get dimensions(): { width: string, height: string } {
    return {
      width: this.width,
      height: this.height
    };
  }

  constructor() {
  }

  ngOnInit(): void {
  }


}
