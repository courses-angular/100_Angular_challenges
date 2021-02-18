import {Component, OnInit} from '@angular/core';
import {UserModel} from '../user/user.model';
import {UserService} from '../user/user.service';
import {LocalStorageService} from '../local-storage/local-storage.service';

@Component({
  selector: 'yl-services-documentation',
  templateUrl: './services-documentation.component.html',
  styleUrls: ['./services-documentation.component.scss']
})
export class ServicesDocumentationComponent implements OnInit {
  user: UserModel = new UserModel();
  state: { [key: string]: any } = {};

  constructor(private userService: UserService, private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
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
}
