import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifyService } from 'src/app/services/notify.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private notifyService: NotifyService,
    private authService: AuthService
  ) {}

  model = {
    password: '',
  };

  handleSubmit(loginForm: NgForm) {
    if (this.model.password === 'dummy@123') {
      this.notifyService.success('login successfully');
      localStorage.setItem('isAuth', 'true');
      // this.authService.setAuth()
      loginForm.reset();
    } else {
      this.notifyService.error('login failed');
      localStorage.removeItem('isAuth');
    }
  }
}
