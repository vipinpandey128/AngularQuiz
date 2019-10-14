import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { Credentials, Tocken } from '../_model/model.interface';
import { UserService } from '../_service/user.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private authNavStatusSource = new BehaviorSubject<boolean>(false);
  authNavStatus$ = this.authNavStatusSource.asObservable();

  private loggedIn = false;
  private subscription: Subscription;

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted: boolean;
  credentials: Credentials = { email: '', password: '' };
  tocken: any;
  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.submitted = false;
    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.brandNew = param['brandNew'];
        this.credentials.email = param['email'];
      });
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  login({ value, valid }: { value: Credentials, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.userService.login(value.email, value.password).finally(() => this.isRequesting = false)
        .subscribe((res) => {
          if (res != null) {
            this.tocken = res;
            const userStr = JSON.stringify(res);
            JSON.parse(userStr, (key, value) => {
              if (typeof value === 'string') {
                localStorage.setItem('auth_token', 'Bearer ' + value);
               // console.log(localStorage.getItem('auth_token'));
              }
            });
            this.loggedIn = true;
            this.authNavStatusSource.next(true);
            // console.log('ISLogin');
            this.router.navigate(['/quiz']);
          } else {
            this.router.navigate(['/home']);
          }
        });
    }
  }
}
