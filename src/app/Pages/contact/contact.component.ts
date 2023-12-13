import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactViewModel } from 'src/app/ViewModel/ContactViewModel';
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

  constructor(private contactService:ContactService) {
    
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
    },(error)=>{

    })
  }
}
