import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'yl-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() isOn: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.isOn = !this.isOn;
  }
}
