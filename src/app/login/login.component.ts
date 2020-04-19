import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from '../auth.service';
import { FormGroup, FormControl, Validators , ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })


  ngOnInit() {
  }

  login(): void {
    console.log(this.loginForm);
    if(this.loginForm.valid){
      let response  = this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      if(response.success){
        this.router.navigate(['blogs'])
      }
    }
   
  }

}
