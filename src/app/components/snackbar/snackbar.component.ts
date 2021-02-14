import {Component, Input, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {SnackbarService} from '../../services/snackbar/snackbar.service';

@Component({
  selector: 'yl-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  @Input() message: string = '';
  isShown: boolean = false;

  constructor(private snackbarService: SnackbarService) {
  }

  ngOnInit(): void {
    this.snackbarService.snackbar$.subscribe(message => {
      this.showSnackbar(message);
    });
  }


  showSnackbar(message: string): void {
    this.isShown = true;
    this.message = message;
    const subscription = of(null).pipe(delay(2900)).subscribe({
      complete: () => {
        this.isShown = false;
        subscription.unsubscribe();
      }
    });
  }

}
