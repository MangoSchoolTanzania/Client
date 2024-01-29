import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../environment';
import { Observable, map } from 'rxjs';
import { LoginViewModel } from '../models/ViewModel/LoginViewModel';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private env:environment,private tokenService:TokenService) { }

  login(LoginViewModel:LoginViewModel){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = this.env.BaseUrl + 'Login';
    return this.http.post(url, LoginViewModel, httpOptions)
      .pipe(map((response: any) => response.token));
  }

  verify(){
    const token = this.tokenService.getFromLocalsotrage();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      }),
    };
    const url = this.env.BaseUrl + `Login/VerifyUser`;

    return this.http.get(url, httpOptions);    
  }
}
