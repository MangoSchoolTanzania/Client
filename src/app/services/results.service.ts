import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../environment';
import { ResultModelView } from '../modelViews/ResultModelView';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class results{
  resultArray:ResultModelView[] = [];
  result:ResultModelView = new ResultModelView();

  constructor(private http: HttpClient, private env:environment) { }

  getGrade(currentPage: number,filterSelectedValue: string,stringParam:string): Observable<ResultModelView[]> {
    const url = this.env.BaseUrl + 'Result/Pag/' + currentPage + '/filterParam/' + filterSelectedValue + '/stringParam/' + stringParam;
    return this.http.get<ResultModelView[]>(url).pipe(
      map((response: ResultModelView[]) => {
        // No need for mapping, as the response type is already Result[]
        return response;
      })
    );
  }
}
