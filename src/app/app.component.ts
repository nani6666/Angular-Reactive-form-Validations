import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  passwordForm : FormGroup;
  constructor(private fb: FormBuilder){
    this.passwordForm = this.fb.group({
      password : ['', Validators.required],
      confirmpassword: ['', Validators.required]
    }, {validator: matchingPasswords('password', 'confirmpassword')}
  );
  }
}

export function matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
  return (group: FormGroup) => {
      let password= group.controls[passwordKey];
      let passwordConfirmation= group.controls[passwordConfirmationKey];
      if (password.value !== passwordConfirmation.value) {
          return passwordConfirmation.setErrors({mismatchedPasswords: true})
      }
  }
}