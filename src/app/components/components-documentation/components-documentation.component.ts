import {Component, Input, OnInit} from '@angular/core';
import {IAccordionModel} from '../accordion/accordion.model';
import {LoaderType} from '../models/loader-type';
import {RibbonType} from '../ribbon/ribbon-type';
import {RibbonLocation} from '../ribbon/ribbon-location';
import {ButtonMetaModel} from '../button-toggle/button-meta.model';

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
  searchItems: string[] = ['US', 'Argentina', 'Israel', 'France', 'UK'];
  loaderType: LoaderType = LoaderType.Loading;
  tabs: { title: string, active: boolean }[] = [
    {title: 'Tab 1', active: true},
    {title: 'Tab 2', active: false},
  ];
  selectedTab = 0;
  public RibbonType = RibbonType;
  public RibbonLocation = RibbonLocation;
  public ribbonStyle = {type: RibbonType.Info, location: RibbonLocation.TopLeft};

  buttonToggleOptions: ButtonMetaModel[] = [
    new ButtonMetaModel({id: 1, title: 'Bold'}),
    new ButtonMetaModel({id: 2, title: 'Italic'}),
    new ButtonMetaModel({id: 3, title: 'underline'}),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onDebounceExampleMethod(event: string): void {
    console.log('Searching...', event);
  }

  onSelectButton(button: ButtonMetaModel): void {
    console.log('Button selected:', button);
  }
}
