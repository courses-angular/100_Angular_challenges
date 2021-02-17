import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'yl-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  private redirectCount: number = 10;

  get redirectMessage(): string {
    if (this.redirectCount <= 0) {
      return 'Redirecting...';
    }
    return `Redirecting to Home page in ${this.redirectCount}.`;
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.redirectCount--;
      if (this.redirectCount <= 0) {
        // this.router.navigate(['']);
      }
    }, 1000);
  }

}
