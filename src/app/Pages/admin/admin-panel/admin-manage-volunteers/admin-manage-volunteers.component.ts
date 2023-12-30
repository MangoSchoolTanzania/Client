import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VolunteerModelView } from 'src/app/models/modelViews/VolunteerModelView';
import { AlertService } from 'src/app/services/alert.service';
import { VolunteerService } from 'src/app/services/volunteer.service';

@Component({
  selector: 'app-admin-manage-volunteers',
  templateUrl: './admin-manage-volunteers.component.html',
  styleUrls: ['./admin-manage-volunteers.component.css']
})
export class AdminManageVolunteersComponent implements OnInit {
  volunteers:VolunteerModelView[] = [];
  constructor(private volunteerService:VolunteerService,private alert:AlertService,private router:Router) {
    
  }
  ngOnInit(): void {
    this.getVolunteers();
  }

  getVolunteers(){
    this.volunteerService.getVolunteers().subscribe((response)=>{
      this.volunteers = response;
    },(error)=>{

    })
  }

  delete(id:number){
    this.volunteerService.deleteContact(id).subscribe((response)=>{
    this.getVolunteers();
    this.alert.successMessage('The message was deleted');
    },(error)=>{

    })
  }

  back(){
    this.router.navigate(['admin-panel'])
  }

}
