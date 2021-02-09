import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'yl-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss']
})
export class DebounceSearchComponent implements OnInit {
  searchTerm: string = '';
  @Input() placeholder: string = 'Search';
  @Input() width: number = 0;
  @Output() searchUpdate: EventEmitter<string> = new EventEmitter<string>();
  private searchUpdate$: Subject<string> = new Subject<string>();

  constructor() {
    this.searchUpdate$.pipe(
      debounceTime(250),
      distinctUntilChanged(),
    ).subscribe(value => {
      this.searchUpdate.emit(value);
    });
  }

  ngOnInit(): void {
  }

  updateSearchTerm(term: string): void {
    this.searchUpdate$.next(term);
  }

}
