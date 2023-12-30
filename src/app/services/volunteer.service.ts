import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { TokenService } from './token.service';
import { VolunteerViewModel } from '../models/ViewModel/VolunteerViewModel';
import { VolunteerModelView } from '../models/modelViews/VolunteerModelView';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  constructor(private http: HttpClient, private env: environment, private tokenService: TokenService) {
  }

  postForm(volunteer: VolunteerViewModel) {
    const token = this.tokenService.getFromLocalsotrage();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    const url = this.env.BaseUrl + `Volunteer/`

    return this.http.post(url, volunteer, httpOptions);
  }

  getVolunteers() {
    const token = this.tokenService.getFromLocalsotrage();
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
  
    const url = `${this.env.BaseUrl}Volunteer/GetAll`;
    return this.http.get(url, httpOptions).pipe(
      map((response: any) => {
        return response.map((item: any) => ({
          id: item.id,
          firstName: item.firstName,
          lastName: item.lastName,
          parentFirstName: item.parentFirstName,
          parentLastName: item.parentLastName,
          email: item.email,
          phone: item.phone,
          birthDate: new Date(item.birthDate),
          educationalLevel: item.eduationalLevel,
          schoolName: item.schoolName,
          emergencyContactName: item.emergencyContactName,
          emergencyContactNumber: item.emergencyContactNumber,
          emergencyRelashionship: item.emergencyRelashionship,
          whyDoUWantToBeAVolunteer: item.whyDoUWantToBeAVolunteer,
          volunteerExperiences: item.volunteerExperiences,
          interestsAndSkills: item.interestsAndSkills,
          isValid: item.isValid,
          // Add other properties as needed
        }));
      })
    );
  }
  
  deleteContact(id:number) {
    const token = this.tokenService.getFromLocalsotrage();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      })
    };
    const url = `${this.env.BaseUrl}Volunteer/Delete/${id}`;

    return this.http.delete(url, httpOptions).pipe(
      map((response: any) => {
        const deletedVolunteer: VolunteerModelView = response;
        return deletedVolunteer;
      })
    )
  }
}
