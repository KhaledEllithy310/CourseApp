import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private notifyService: NotifyService) {}

  model = {
    password: '',
  };

  handleSubmit(loginForm: NgForm) {
    if (this.model.password === 'dummy@123') {
      this.notifyService.success('login successfully');
      localStorage.setItem('isAuth', 'true');
      loginForm.reset();
    } else {
      this.notifyService.error('login failed');
      localStorage.setItem('isAuth', 'false');
    }
  }
}
