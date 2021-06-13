import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ConfirmPassword } from '../customValidators/confirmPassword';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  ionicForm: FormGroup;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  createRegisterForm() {

  }

  submitForm() {
    console.log(this.ionicForm.value)
  }

  signUp(email, password, name) {
    this.authService.RegisterUser(email.value, password.value)
      .then((res) => {
        // Do something here
        this.router.navigate(['home']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}
