import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'yl-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
@Input()quote: string = '';
@Input()author: string = '';
@Input()occupation: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
