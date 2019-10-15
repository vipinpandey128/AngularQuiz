import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { UserService } from '../_service/user.service';
import { ToastService } from '../_service/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isRequesting: boolean;
  submitted: boolean;
  formbulider: any;
  UserRegistrationForm: any;
  constructor(private userService: UserService, private toastr:ToastService) {}


  ngOnInit() {
    // this.UserRegistrationForm = this.formbulider.group({
    //   email: ['', [Validators.required]],
    //   password: ['', [Validators.required]],
    //   cpassword: ['', [Validators.required]],
    // });
   // this.isRequesting = false;
  }

  onFormSubmit() {
    const user = this.UserRegistrationForm.value;
    this.Createemployee(user.Email, user.CPassword);
  }
  Createemployee(email,pass) {
    this.userService.register(email,pass).subscribe(
      () => {
        this.toastr.showSuccess('Data saved Successfully');
        this.UserRegistrationForm.reset();
      });
  }
}
