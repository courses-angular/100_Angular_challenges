import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'yl-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input()title: string = '';
@Input()subTitle: string = '';
@Input()iconClasses: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
