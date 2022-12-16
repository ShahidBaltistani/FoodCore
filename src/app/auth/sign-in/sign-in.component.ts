import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 public myForm!: FormGroup;
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
  Test(){
    console.log('shahid')
  }
}
