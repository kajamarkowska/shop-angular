import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { LoginAction } from '../state/auth.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({})
  loginFields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'email',
        placeholder: 'Enter your email',
        required: true
      }

    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'password',
        placeholder: 'Enter your password',
        required: true

      }

    }
  ]
  constructor(public store: Store) { }

  ngOnInit(): void {
  }
  login() {
    this.store.dispatch(new LoginAction(this.loginForm.value.email, this.loginForm.value.password))
  }

}
