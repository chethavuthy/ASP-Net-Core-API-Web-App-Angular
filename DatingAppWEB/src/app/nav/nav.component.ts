import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormGroup, Form } from '@angular/forms';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  @ViewChild('loginForm', { static: false }) formValues;

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      data => {
        // console.log('login successfully', data);
        this.alertify.success('logged in successfully');
        this.formValues.reset();
      },
      error => {
        // console.log('fail to login', error);
        this.alertify.error('Wrong username or password');
      }
    );
  }

  logout() {
    this.authService.userToken = null;
    localStorage.removeItem('token');
    // console.log('logged out');
    this.alertify.message('logged out');
  }

  loggedIn() {
    // const token = localStorage.getItem('token');
    // return !!token;
    return this.authService.loggedIn();
  }
}
