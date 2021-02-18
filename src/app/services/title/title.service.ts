import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private title: Title, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  initializeTitleService(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    )
      .subscribe((route) => {
        console.log(route);
        const {data} = this.activatedRoute.root.firstChild.snapshot;
        console.log(data);
        const mainTitle = '100 Angular Challenge';
        const lasTitle = this.title.getTitle();
        if (data?.title) {
          const title = `${mainTitle} - ${data.title}`;
          if (lasTitle !== title) {
            this.title.setTitle(title);
          }
        } else {
          if (lasTitle !== mainTitle) {
            this.title.setTitle(mainTitle);
          }
        }
      });
  }
}
