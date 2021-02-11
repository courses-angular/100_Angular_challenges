import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {UserModel} from './user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUserById(userId: number): Observable<UserModel> {
    return this.http.get(`${this.baseUrl}/${userId}`).pipe(
      map((value) => new UserModel(value))
    );
  }
}
