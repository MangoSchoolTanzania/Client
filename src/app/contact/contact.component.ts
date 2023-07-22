import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  invalidForm = false;
  contactForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    message: new FormControl(null, Validators.required),
  });

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  send(){
    if(!this.contactForm.valid){
      this.invalidForm = true
      return;
    }
    this.invalidForm = false
  }
}
