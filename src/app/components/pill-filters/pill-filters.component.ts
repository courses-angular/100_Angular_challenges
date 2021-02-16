import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'yl-pill-filters',
  templateUrl: './pill-filters.component.html',
  styleUrls: ['./pill-filters.component.scss']
})
export class PillFiltersComponent implements OnInit {
  private pillLabels: string[];

  @Input() set pills(value: string[]) {
    this.pillLabels = value;
    this.unSelectedPills = value;
  }

  unSelectedPills: string[] = [];
  selectedPills: string[] = [];

  @Output() selected: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() {
  }

  ngOnInit(): void {
  }

  removePill(event: { hasBeenSelected: boolean; label: string }): void {
    if (!event.hasBeenSelected) {
      const selectedIndex = this.selectedPills.indexOf(event.label);
      const [selectedPill] = this.selectedPills.splice(selectedIndex, 1);
      this.unSelectedPills.push(selectedPill);
    }
  }

  addPill(event: { hasBeenSelected: boolean; label: string }): void {
    if (event.hasBeenSelected) {
      const selectedIndex = this.unSelectedPills.indexOf(event.label);
      const [selectedPill] = this.unSelectedPills.splice(selectedIndex, 1);
      this.selectedPills.push(selectedPill);
      this.selected.emit(this.selectedPills);

    }
  }
}
