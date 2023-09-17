import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../environment';
import { Observable, map } from 'rxjs';
import { LoginViewModel } from '../ViewModel/LoginViewModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private env:environment) { }

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
}
