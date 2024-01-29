import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VolunteerViewModel } from 'src/app/models/ViewModel/VolunteerViewModel';
import { AlertService } from 'src/app/services/alert.service';
import { VolunteerService } from 'src/app/services/volunteer.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  currentCard = 1;
  invalidForm = false;
  volunteerForm = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    parentFirstName: new FormControl(null, Validators.required),
    parentLastName: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
    birthDate: new FormControl(null, Validators.required),
    educationLevel: new FormControl(null, Validators.required),
    schoolName: new FormControl(null, Validators.required),
    emergencyContactName: new FormControl(null, Validators.required),
    emergencyContactPhone: new FormControl(null, Validators.required),
    emergencyRelationship: new FormControl(null, Validators.required),
    whyDoUWantTOBeAVolunteer: new FormControl(null, Validators.required),
    volunteerExperiences: new FormControl(null, Validators.required),
    interestsAndSkills: new FormControl(null, Validators.required),
    isValid: new FormControl(null, Validators.required),
  });

  /**
   *
   */
  constructor(private volunteerService:VolunteerService,private alert:AlertService) {
    
  }
  ngOnInit(): void {

  }

  CurrentCard(signal: string) {
    signal === '+' ? this.currentCard++ : this.currentCard--;
  }

  send() {
    if (!this.volunteerForm.valid) {
      this.invalidForm = true;
      return;
    }
    this.invalidForm = false;

    let volunteerForm = this.createVolunteerViewModel();
    this.volunteerService.postForm(volunteerForm).subscribe((response)=>{
    this.volunteerForm.reset();
    this.currentCard = 1;
    this.alert.successMessage('Your form was sent successfuly!');
    },(error)=>{

    })
  }

  createVolunteerViewModel(): VolunteerViewModel {
    const volunteerModel = new VolunteerViewModel();
    volunteerModel.FirstName = this.volunteerForm.controls['firstName'].value || '';
    volunteerModel.LastName = this.volunteerForm.controls['lastName'].value || '';
    volunteerModel.ParentFirstName = this.volunteerForm.controls['parentFirstName'].value || '';
    volunteerModel.ParentLastName = this.volunteerForm.controls['parentLastName'].value || '';
    volunteerModel.Email = this.volunteerForm.controls['email'].value || '';
    volunteerModel.Phone = this.volunteerForm.controls['phone'].value || '';
    volunteerModel.BirthDate = this.volunteerForm.controls['birthDate'].value || new Date();
    volunteerModel.EduationalLevel = this.volunteerForm.controls['educationLevel'].value || '';
    volunteerModel.SchoolName = this.volunteerForm.controls['schoolName'].value || '';
    volunteerModel.EmergencyContactName = this.volunteerForm.controls['emergencyContactName'].value || '';
    volunteerModel.EmergencyContactNumber = this.volunteerForm.controls['emergencyContactPhone'].value || '';
    volunteerModel.EmergencyRelashionship = this.volunteerForm.controls['emergencyRelationship'].value || '';
    volunteerModel.WhyDoUWantToBeAVolunteer = this.volunteerForm.controls['whyDoUWantTOBeAVolunteer'].value || '';
    volunteerModel.VolunteerExperiences = this.volunteerForm.controls['volunteerExperiences'].value || '';
    volunteerModel.InterestsAndSkills = this.volunteerForm.controls['interestsAndSkills'].value || '';
    volunteerModel.IsValid = this.volunteerForm.controls['isValid'].value || false;
    return volunteerModel;
  }
}
