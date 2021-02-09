import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'yl-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() tabs: { title: string, active: boolean }[] = [];
  @Output() selectedTabIndex = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectTab(index: number, selectedTab: { title: string, active: boolean }): void {
    this.tabs.forEach((tab) => {
      tab.active = (selectedTab === tab);
    });
    this.selectedTabIndex.emit(index);
  }

}
