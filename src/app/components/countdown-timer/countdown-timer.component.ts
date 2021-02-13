import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'yl-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  private countDownTime: number;
  private timerNumerics = {
    milliseconds: 1000,
    minuteInSeconds: 60,
    minutesInHours: 60,
    hoursInDay: 24
  };

  @Input() set time(value: string) {
    this.countDownTime = new Date(value).getTime();
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  get days(): string {
    const {minuteInSeconds, minutesInHours, milliseconds, hoursInDay} = this.timerNumerics;
    const days = Math.floor(this.getTimeDifference() / (milliseconds * minutesInHours * minuteInSeconds * hoursInDay));
    return this.formatTime(days);
  }

  get hours(): string {
    const {minuteInSeconds, minutesInHours, milliseconds, hoursInDay} = this.timerNumerics;
    // tslint:disable-next-line:max-line-length
    const hours = Math.floor(this.getTimeDifference() % (hoursInDay * minutesInHours * minuteInSeconds * milliseconds) / (minutesInHours * minuteInSeconds * milliseconds));
    return this.formatTime(hours);
  }

  get minutes(): string {
    const {minuteInSeconds, minutesInHours, milliseconds} = this.timerNumerics;
    const minutes = Math.floor(this.getTimeDifference() % (minutesInHours * minuteInSeconds * milliseconds) / (minuteInSeconds * milliseconds));
    return this.formatTime(minutes);
  }

  get seconds(): string {
    const {milliseconds, minuteInSeconds} = this.timerNumerics;
    const seconds = Math.floor((this.getTimeDifference() % (minuteInSeconds * milliseconds)) / milliseconds);
    console.log(seconds);
    return this.formatTime(seconds);
  }


  private getTimeDifference(): number {
    const currentTime = new Date().getTime();
    console.log(this.countDownTime - currentTime);
    return this.countDownTime - currentTime;
  }

  formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

}
