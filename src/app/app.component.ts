import { Component } from '@angular/core';
import {IAccordionModel} from './components/accordion/accordion.model';

@Component({
  selector: 'yl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-challanges';
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
}
