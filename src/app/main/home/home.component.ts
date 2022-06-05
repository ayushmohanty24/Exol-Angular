import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })
  registerForm = this.fb.group({
    email: ['', Validators.required],
    name: ['', Validators.required],
    pass: ['', Validators.required]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmitloginform(){
    console.warn(this.loginForm.value);
   
  }
  onSubmitregform(){
    console.log(this.registerForm.value);
   
  }
}
