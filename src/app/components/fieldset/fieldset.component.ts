import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'yl-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss']
})
export class FieldsetComponent implements OnInit {
  @Input() legend: string = '';
  @Input() isOpen: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

}
