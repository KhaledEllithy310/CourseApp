import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifyService } from './../../services/notify.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private notifyService: NotifyService) {}
  isValid: boolean = true;
  interests: string[] = ['sports', 'swimming', 'fitness'];
  model = {
    displayName: '',
    firstName: '',
    lastName: '',
    about: '',
    interests: {} as { [key: string]: boolean },
    status: '',
    experience: '',
    expertise: {
      backend: false,
      frontend: false,
    },
    role: '',
  };

  ngOnInit() {
    let profileData = localStorage.getItem('profile');
    if (profileData) this.model = JSON.parse(profileData);
  }

  handleSubmit(profileForm: NgForm) {
    const { backend, frontend } = this.model.expertise;
    const { status } = this.model;
    if (status) {
      if (
        ((backend || frontend) && status === 'Professional') ||
        (status === 'student' && !(backend && frontend))
      ) {
        this.isValid = true;
        localStorage.setItem('profile', JSON.stringify(this.model));
        this.notifyService.success('Your profile is updated.');
        profileForm.reset();
      } else {
        this.isValid = false;
        if (status === 'professional' && !(backend || frontend)) {
          this.notifyService.error('Please select either Backend or Frontend.');
        }
      }
    } else {
      this.isValid = false;
    }
  }
}
