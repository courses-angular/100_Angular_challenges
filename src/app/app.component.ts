import {Component, OnInit} from '@angular/core';
import {IAccordionModel} from './components/accordion/accordion.model';
import {TitleService} from './services/title/title.service';

@Component({
  selector: 'yl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = '100 Angular challenges';

  constructor(private titleService: TitleService) {
  }
  ngOnInit(): void {
   this.titleService.initializeTitleService();
  }


}
