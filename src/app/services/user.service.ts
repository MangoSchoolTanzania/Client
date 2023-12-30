import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { TokenService } from './token.service';
import { UserViewModel } from '../models/ViewModel/UserViewModel';
import { map } from 'rxjs';
import { InviteViewModel } from '../models/ViewModel/InviteViewModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private env: environment, private tokenService: TokenService) { }

  getUsers() {
    const token = this.tokenService.getFromLocalsotrage();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };

    
    const url = this.env.BaseUrl + `User`
    return this.http.get<UserViewModel[]>(url,httpOptions).pipe(
      map((response: UserViewModel[]) => {
        return response;
      })
    );

  }

  inviteUser(invite:InviteViewModel){
    debugger;
    const token = this.tokenService.getFromLocalsotrage();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };

    const url = this.env.BaseUrl + `User/Invite`
    return this.http.post(url,invite,httpOptions);
  }

  deleteUser(id:number){
    const token = this.tokenService.getFromLocalsotrage();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    
    const url = this.env.BaseUrl + `User/${id}`

    return this.http.delete(url,httpOptions);
  }
}
