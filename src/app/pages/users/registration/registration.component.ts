import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UsersService, UsersProfileService } from '../../../services/index';

import { User } from '../../../../models/user.model';
import { UserProfile } from '../../../../models/user-profile.model';

@Component({
  moduleId: 'module.id',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: User;
  userProfile: UserProfile;
  description: string;

  roles = ['Freelancer', 'Employer'];

  constructor(private userService: UsersService, private usersPorfileService: UsersProfileService, private router: Router) { }


  ngOnInit() {
    this.model = new User('', '', '', '', '', '', '', '');
    this.userProfile = new UserProfile('', '', '', '', '', '', '', '');
    this.description = '';
  }

  register() {
    let user = this.userService.createUser(this.model);
    user.subscribe((result) => {
      let res = result.json();
      console.log(res);
      alert("Welcome to Freelance Project!");
      if (result.status === 201) {
        this.userProfile.username = this.model.username;
        this.userProfile.firstName = this.model.firstName;
        this.userProfile.lastName = this.model.lastName;
        this.userProfile.email = this.model.email;
        this.userProfile.role = this.model.role;
        this.userProfile.description = this.description;
        this.userProfile.companyName = this.model.companyName;
        this.userProfile.country = this.model.country;
        console.log(this.userProfile);
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('authtoken', res._kmd.authtoken);
        sessionStorage.setItem('id', res._id);
        sessionStorage.setItem('role', res.role);
        this.usersPorfileService.createUserProfile(this.userProfile, res._kmd.authtoken)
        .subscribe(() => {
          this.router.navigate(['/home']);
        });
      }
    });
  }
}
