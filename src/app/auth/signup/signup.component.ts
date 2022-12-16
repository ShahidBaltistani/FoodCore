import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
myForm!: FormGroup;
constructor(private fb : FormBuilder) { }

ngOnInit(): void {
  this.myForm = this.fb.group({
    userName: new FormControl('shahid', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(false, Validators.required),
  });
}
  onSubmit(myForm : FormGroup) {
    console.log(myForm.value);
  }
}
