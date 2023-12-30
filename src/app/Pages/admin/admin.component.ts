import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginViewModel } from 'src/app/models/ViewModel/LoginViewModel';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  invalidForm = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  loginViewModel = new LoginViewModel();

  constructor(private loginService:LoginService,private tokenService:TokenService,private router: Router) {
    
  }
  ngOnInit(): void {
  
  }

  send() {
    if (this.loginForm.invalid) {
      this.invalidForm = true;
      return;
    }
  
    const { email, password } = this.loginForm.value;
  
    if (!email || !password) {
      this.invalidForm = true;
      return;
    }
  
    const loginViewModel: LoginViewModel = {
      Email: email,
      Password: password
    };
  
    this.loginService.login(loginViewModel).subscribe((response)=>{
      this.tokenService.addToLocalStorage(response);
      this.router.navigate(['admin-panel'])
    },(error)=>{
    },()=>{

    });
  }
}
