import { Component, OnInit } from '@angular/core';
import {IAccordionModel} from '../accordion/accordion.model';

@Component({
  selector: 'yl-components-documentation',
  templateUrl: './components-documentation.component.html',
  styleUrls: ['./components-documentation.component.scss']
})
export class ComponentsDocumentationComponent implements OnInit {
  progressValue: number = 0;
  accordionItems: IAccordionModel[] = [
    {
      id: 0,
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false
    },
    {
      id: 2,
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
