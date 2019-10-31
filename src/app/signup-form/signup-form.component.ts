import { usernameValidator } from './../Validators/usernamevalidator';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    userid : new FormControl('',
    [Validators.required,
      Validators.minLength(3),
      usernameValidator.cannotContainSpace ],[usernameValidator.mustbeUnique]),
    pwd : new FormControl('',Validators.required),
    permissions : new FormArray([])
  });

  get userid(){
    return this.form.get('userid');
  }
  get pwd(){
    return this.form.get('pwd');
  }
  get permissions()
  {
    return this.form.get('permissions') as FormArray;
  }
  addPermission (permission : HTMLInputElement)
  {
    this.permissions.push(new FormControl(permission.value) );
    permission.value = '';
    console.log(permission);
  }
}
