import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { ClassViewModel } from '../ViewModel/ClassViewModel';
import { TokenService } from './token.service';
import { map } from 'rxjs';
import { ClassModelView } from '../modelViews/ClassModelView';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  constructor(private http: HttpClient, private env: environment, private tokenService:TokenService) { }

  addClass(ClassViewModel: ClassViewModel) {
    const token = this.tokenService.getFromLocalsotrage();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    const url = this.env.BaseUrl + 'Class';
    return this.http.post(url, ClassViewModel, httpOptions);
  }

  getClass(page:number){
    const token = this.tokenService.getFromLocalsotrage();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      }),
    };

    const url = this.env.BaseUrl + `Class/Pag/${page}`;

    return this.http.get(url, httpOptions).pipe(
      map((response: any) => {
        // Assuming the response is an array of ClassModelView objects,
        // you can map it to an array of ClassModelView instances.
        return response.map((item: any) => {
          const classModelView = new ClassModelView();
          classModelView.id = item.id;
          classModelView.name = item.name;
          classModelView.isActive = item.isActive;
          classModelView.month = item.month;
          classModelView.year = item.year;
          return classModelView;
        });
      })
    );
  }

  deleteClass(id:number){
    const token = this.tokenService.getFromLocalsotrage();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    const url = this.env.BaseUrl + 'Class' + `/${id}`;

    return this.http.delete(url,httpOptions);

  }

  updateClass(ClassViewModel: ClassViewModel){
    const token = this.tokenService.getFromLocalsotrage();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    const url = this.env.BaseUrl + 'Class' ;
    return this.http.put(url, ClassViewModel, httpOptions);
  }
}
