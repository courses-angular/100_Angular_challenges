import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonMetaModel} from './button-meta.model';

@Component({
  selector: 'yl-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {
  @Input() options: ButtonMetaModel[] = [];
  @Output() selection: EventEmitter<ButtonMetaModel> = new EventEmitter<ButtonMetaModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickButton(selectedOption: ButtonMetaModel): void {
    this.options.forEach((option) => {
      option.isActive = selectedOption === option;
    });
    this.selection.emit(selectedOption);
  }
}
