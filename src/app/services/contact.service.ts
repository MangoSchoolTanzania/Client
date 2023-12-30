import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { TokenService } from './token.service';
import { ContactModelView } from '../models/modelViews/ContactModelView';
import { Observable, map } from 'rxjs';
import { ContactViewModel } from '../models/ViewModel/ContactViewModel';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient, private env: environment, private tokenService: TokenService) { }

  postContact(contact: ContactViewModel): Observable<ContactModelView> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const url = this.env.BaseUrl + 'Contact';

    return this.http.post(url, contact, httpOptions).pipe(
      map((response: any) => {
        // Assuming the server returns the created contact in the response
        const createdContact: ContactModelView = response;
        return createdContact;
      })
    );
  }

  getContacts(): Observable<ContactModelView[]> {
    const token = this.tokenService.getFromLocalsotrage();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      })
    };

    const url = `${this.env.BaseUrl}Contact/GetAll`;
    return this.http.get(url, httpOptions).pipe(
      map((response: any) => {
        const contactDetails: ContactModelView[] = response;
        return contactDetails;
      })
    );
  }

  deleteContact(id:number): Observable<ContactModelView> {
    const token = this.tokenService.getFromLocalsotrage();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      })
    };
    const url = `${this.env.BaseUrl}Contact/Delete/${id}`;

    return this.http.delete(url, httpOptions).pipe(
      map((response: any) => {
        const deletedContact: ContactModelView = response;
        return deletedContact;
      })
    )
  }


}
