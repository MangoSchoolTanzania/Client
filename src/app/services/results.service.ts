import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class results{

  constructor(private http: HttpClient, private env:environment) { }

  getGrade(){
    const url = this.env.BaseUrl + 'Class/Paginated/1'
    return this.http.get(url)
  }

}
