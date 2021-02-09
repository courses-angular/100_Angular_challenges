import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'yl-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  searchTerm: string = '';
  @Input() items: string[] = [];
  isSelected: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  updateSearchTerm(term: string): void {
    this.searchTerm = term;
    this.isSelected = false;
  }

  onSelectItem(item: string): void {
    this.searchTerm = item;
    this.isSelected = true;
  }
}
