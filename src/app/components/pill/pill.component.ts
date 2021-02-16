import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PillType} from './pill-type.enum';

@Component({
  selector: 'yl-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent implements OnInit {
  @Input() type: PillType = PillType.Info;
  @Input() label: string = '';
  @Input() iconClass: string = '';
  // Properties for pills-filter component
  @Input() isActive: boolean = false;
  @Input() canBeSelected: boolean = false;
  @Output() selected: EventEmitter<{ hasBeenSelected: boolean, label: string }> = new EventEmitter<{ hasBeenSelected: boolean, label: string }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isActive = !this.isActive;
    this.selected.emit({hasBeenSelected: this.isActive, label: this.label});
  }
}
