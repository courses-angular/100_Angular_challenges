import {Component, Input, OnInit} from '@angular/core';
import {fadeInOutAnimation} from '../../other/animations/fade-in-out/fade-in-out.animation';
import {of, timer} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'yl-simple-popup',
  templateUrl: './simple-popup.component.html',
  styleUrls: ['./simple-popup.component.scss'],
  animations: [fadeInOutAnimation]
})
export class SimplePopupComponent implements OnInit {
  @Input() message: string = '';
  isShown: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }
  showPopupOnHover(): void{
    this.isShown = true;
  }

  showPopupOnClick(): void {
    this.isShown = true;
    const subscription = of(null).pipe(delay(3000)).subscribe({
      complete: () => {
        this.isShown = false;
        subscription.unsubscribe();
      }
    });
  }

  hidePopup(): void {
    this.isShown = false;
  }
}
