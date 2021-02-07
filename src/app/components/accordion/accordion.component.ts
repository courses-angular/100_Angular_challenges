import {Component, Input, OnInit} from '@angular/core';
import {IAccordionModel} from './accordion.model';

@Component({
  selector: 'yl-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() accordionItems: IAccordionModel[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  public toggle(item: IAccordionModel): void {
    item.isExpanded = !item.isExpanded;
  }

}
