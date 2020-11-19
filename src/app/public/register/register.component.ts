import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Store } from '@ngxs/store';
import { RegisterAction } from '../state/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
   registerForm : FormGroup = new FormGroup({})
  registerFields: FormlyFieldConfig[]=[
   {
   key: 'email',
   type: 'input',
   templateOptions:{
     label: 'email',
     placeholder: 'Enter your email',
     required: true
   }
  
  },
  {
    key: 'password',
    type: 'input',
    templateOptions: {
      type:  'password',
      label: 'password',
      placeholder: 'Enter your password',
      required: true

  }


  }
  
  
  
]
  constructor(public store: Store) { }

  ngOnInit(): void {
  }
  register(){
    this.store.dispatch(new RegisterAction({
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }))
  }

}
