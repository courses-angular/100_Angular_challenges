import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'yl-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems: number = 1;
  @Input() pageSize: number = 25;
  @Input() currentPage: number = 1;
  @Input() step: number = 2;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil((this.totalItems || 1) / (this.pageSize || 1));
  }

  get isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  get isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }

  get isNextPageDisable(): boolean {
    return this.currentPage + this.step > this.totalPages;
  }

  get isPreviousPageDisable(): boolean {
    return this.currentPage - this.step < 1;
  }

  get pages(): number[] {
    const pages = [];
    if (this.currentPage > 1) {
      pages.push(this.currentPage - 1);
    }
    pages.push(this.currentPage);

    if (this.currentPage < this.totalPages) {
      pages.push(this.currentPage + 1);
    }
    if (this.currentPage + 1 < this.totalPages) {
      pages.push(this.currentPage + 2);
    }
    if (this.currentPage + 1 < this.totalPages && this.currentPage === 1) {
      pages.push(this.currentPage + 3);
    }
    return pages;
  }

  constructor() {
  }

  ngOnInit(): void {
    console.log('Total pages', this.totalPages);
    console.log('Current page', this.currentPage);
    console.log('First page', this.isFirstPage);
    console.log('Last page', this.isLastPage);
    console.log('Pages', this.pages);
  }

  setPage(page: number): void {
    this.currentPage = page;
    this.pageChange.emit(page);
  }

}
