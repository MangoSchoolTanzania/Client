import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactModelView } from 'src/app/models/modelViews/ContactModelView';
import { ResultModelView } from 'src/app/models/modelViews/ResultModelView';
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
  constructor(private contactService:ContactService,private router:Router) {
    
  }
  ngOnInit(): void {
    this.getMessages();
  }

  back(){
    this.router.navigate(['admin-panel'])
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