import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../../models/user.model';
import { kinveyKey, kinveySecret, kinveyAuthHeaders } from '../../shared/constants';

let headers = new Headers();
headers.append('Authorization', kinveyAuthHeaders.Authorization);

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  createUser(user: User) {
    // base auth
    return this.http.post('https://baas.kinvey.com/user/kid_ryr_EhREx', user, { headers: headers });
  }

  loginUser(user: {username: string, password: string}) {
    return this.http.post('https://baas.kinvey.com/user/kid_ryr_EhREx/login', user , { headers: headers });
  }

  logout(authToken: string) {
    let kinveyLogoutHeaders = 'Kinvey ' + authToken;
    console.log(kinveyLogoutHeaders);
    let logoutHeaders = new Headers();
    logoutHeaders.append('Autorization', kinveyLogoutHeaders);
    return this.http.get('https://baas.kinvey.com/user/kid_ryr_EhREx/_logout', { headers: logoutHeaders });
  }
}
