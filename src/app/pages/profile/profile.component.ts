import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  model = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: '',
  };
  constructor(private formBuilder: FormBuilder) {}

  handleSubmit(registerForm: NgForm) {
    console.log(registerForm);
  }
}
