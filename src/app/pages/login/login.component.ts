import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifyService } from 'src/app/services/notify.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private notifyService: NotifyService,
    private authService: AuthService,
    private router: Router
  ) {}

  model = {
    password: '',
  };

  handleSubmit(loginForm: NgForm) {
    if (this.model.password === 'dummy@123') {
      this.notifyService.success('login successfully');
      this.authService.login();
      this.router.navigate(['/']);
      loginForm.reset();
    } else {
      this.notifyService.error('login failed');
      localStorage.removeItem('isAuth');
    }
  }
}
