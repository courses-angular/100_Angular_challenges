import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'yl-banner-cut-out',
  templateUrl: './banner-cut-out.component.html',
  styleUrls: ['./banner-cut-out.component.scss']
})
export class BannerCutOutComponent implements OnInit {
@Input()imageUrl: string = 'https://images.pexels.com/photos/163142/glasses-notebook-wooden-business-163142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
@Input()title: string = '100 Angular challenge banner';
  constructor() { }

  ngOnInit(): void {
  }

}
