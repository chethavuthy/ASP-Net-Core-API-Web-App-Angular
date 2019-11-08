import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  @ViewChild('registerForm', { static: false }) formValues;

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        // console.log('registration successful');
        this.alertify.success('Registration successful');
        this.formValues.reset();
      },
      error => {
        // console.log(error);
        this.alertify.error('Specify the correct fields');
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
    // console.log('cancel');
  }
}
