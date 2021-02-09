import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'yl-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() width: number = 0;
  @Input() counter: number = 0;
  @Input() minValue: number = 0;
  @Input() maxNumber: number = Number.MAX_SAFE_INTEGER;

  constructor() {
  }

  ngOnInit(): void {
  }

  onDecrement(): void {
    if (this.minValue < this.counter) {
      this.counter--;

    }
  }

  onIncrement(): void {
    if (this.maxNumber > this.counter) {
      this.counter++;
    }
  }
}
