import {Component, Input, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'yl-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  @Input() message: string = '';
  isShown: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  showSnackbar(): void {
    this.isShown = true;

    const subscription = of(null).pipe(delay(2900)).subscribe({
      complete: () => {
        this.isShown = false;
        subscription.unsubscribe();
      }
    });
  }

}
