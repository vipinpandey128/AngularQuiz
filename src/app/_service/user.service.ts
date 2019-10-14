import { Injectable } from '@angular/core';
import { ConfigService } from '../utils/config.service';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tocken } from '../_model/model.interface';

@Injectable()

export class UserService extends BaseService {

  baseUrl: string;
  headers: any = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  // Observable navItem source
  private authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this.authNavStatusSource.asObservable();

  private loggedIn = false;

  constructor(private http: HttpClient, private configService: ConfigService) {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this.authNavStatusSource.next(this.loggedIn);
    this.baseUrl = configService.getApiURI();
  }

  register(email: string, password: string, firstName: string, lastName: string, location: string): Observable<boolean> {
    const body = JSON.stringify({ email, password, firstName, lastName, location });
    return this.http.post(this.baseUrl + '/Auth/register', body, this.headers)
      .pipe(map(res => true))
      .catch(this.handleError);
  }

  login(userName, password) {
    const body = JSON.stringify({ userName, password });
    return this.http
      .post(
        this.baseUrl + '/auth/login',
        body, this.headers
      );
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this.authNavStatusSource.next(false);
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
