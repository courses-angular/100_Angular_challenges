import {Component, OnInit} from '@angular/core';
import {UserModel} from '../user/user.model';
import {UserService} from '../user/user.service';
import {LocalStorageService} from '../local-storage/local-storage.service';
import {SnackbarService} from '../snackbar/snackbar.service';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'yl-services-documentation',
  templateUrl: './services-documentation.component.html',
  styleUrls: ['./services-documentation.component.scss']
})
export class ServicesDocumentationComponent implements OnInit {
  user: UserModel = new UserModel();
  userIdExample = new UserModel();
  state: { [key: string]: any } = {};

  constructor(private userService: UserService,
              private snackbarService: SnackbarService,
              private activatedRoute: ActivatedRoute,
              private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    // Activated Route
    this.activatedRoute.params.pipe(
      map((params) => params.id),
      mergeMap((id) => this.userService.getUserById(id))
    ).subscribe({
      next: ((value) => {
        this.userIdExample = value;
      })
    });

    // Get localStorage
    this.localStorage.state$.subscribe((data) => {
      this.state = data;
    });

    // Get user by id
    this.userService.getUserById(1).subscribe({
      next: (response: any) => {
        this.user = response;
      },
      error: ((err) => {
        console.log(err);
      }),
      complete: (() => {
        console.log('Done');
      })
    });
  }

  updateState(): void {
    this.localStorage.setState('Hello', {name: 'Yevgeny', profession: 'Angular Developer'});
  }

  callSnackBarService(): void {
    this.snackbarService.callSnackbar('Hello from snackbar service');
  }
}
