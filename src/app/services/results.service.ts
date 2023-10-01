import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../environment';
import { ResultModelView } from '../modelViews/ResultModelView';
import { Observable, map } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class results{
  resultArray:ResultModelView[] = [];
  result:ResultModelView = new ResultModelView();

  constructor(private http: HttpClient, private env:environment, private tokenService:TokenService) { }

  getGrade(currentPage: number,filterSelectedValue: string,stringParam:string): Observable<ResultModelView[]> {
    const url = this.env.BaseUrl + 'Result/Pag/' + currentPage + '/filterParam/' + filterSelectedValue + '/stringParam/' + stringParam;
    return this.http.get<ResultModelView[]>(url).pipe(
      map((response: ResultModelView[]) => {
        return response;
      })
    );
  }

  getResultByClass(classId:number){
    debugger;
    const token = this.tokenService.getFromLocalsotrage();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      }),
    };

    const url = this.env.BaseUrl + `Result/ByClass/${classId}`
    return this.http.get<ResultModelView[]>(url,httpOptions).pipe(
      map((response: ResultModelView[]) => {
        return response;
      })
    );
  }
}
