import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactModelView } from 'src/app/modelViews/ContactModelView';
import { ResultModelView } from 'src/app/modelViews/ResultModelView';
import { ContactService } from 'src/app/services/contact.service';
import { results } from 'src/app/services/results.service';

@Component({
  selector: 'app-admin-manage-results',
  templateUrl: './admin-manage-messages.component.html',
  styleUrls: ['./admin-manage-messages.component.css']
})
export class AdminManageMessagesComponent implements OnInit{
  messages:ContactModelView[] = [];
  /**
   *
   */
  constructor(private contactService:ContactService) {
    
  }
  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(){
    this.contactService.getContacts().subscribe((response)=>{
      this.messages = response;
    },(error)=>{

    })
  }

  delete(id?:number){
    if(id) this.contactService.deleteContact(id).subscribe((Response)=>{
      this.getMessages();
    },(Error)=>{

    })
  }

}