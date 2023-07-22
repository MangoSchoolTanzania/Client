import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  ngOnInit(): void {

  }

  CurrentCard(signal:string){
    signal === '+' ? this.currentCard ++ : this.currentCard -- ;
  }

  send(){
    if(!this.volunteerForm.valid){
      this.invalidForm = true;
      return;
    }
    this.invalidForm = false;

    console.log(this.volunteerForm.controls)
  }

}
