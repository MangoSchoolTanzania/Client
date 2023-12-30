import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactViewModel } from 'src/app/models/ViewModel/ContactViewModel';
import { AlertService } from 'src/app/services/alert.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  invalidForm = false;
  contactViewModel:ContactViewModel = new ContactViewModel();
  contactForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    message: new FormControl(null, Validators.required),
  });

  constructor(private contactService:ContactService,
    private alert:AlertService) {
    
  }

  ngOnInit(): void {

  }

  send(){
    if(!this.contactForm.valid){
      this.invalidForm = true
    }
    this.invalidForm = false
    this.contactViewModel = {
      name:this.contactForm.controls['name'].value || '' ,
      email:this.contactForm.controls['email'].value || '',
      message:this.contactForm.controls['message'].value || '',
    }    
    this.contactService.postContact(this.contactViewModel).subscribe((response)=>{
      this.contactForm.reset();
      this.alert.successMessage('The message was successfuly sent')
    },(error)=>{
      this.alert.successMessage('Something went wrong, Try again later')
    })
  }
}
