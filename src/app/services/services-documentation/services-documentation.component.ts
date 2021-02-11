import {Component, OnInit} from '@angular/core';
import {UserModel} from '../user/user.model';
import {UserService} from '../user/user.service';

@Component({
  selector: 'yl-services-documentation',
  templateUrl: './services-documentation.component.html',
  styleUrls: ['./services-documentation.component.scss']
})
export class ServicesDocumentationComponent implements OnInit {
  user: UserModel = new UserModel();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
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

}
