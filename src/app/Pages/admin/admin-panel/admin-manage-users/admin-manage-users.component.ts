import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InviteViewModel } from 'src/app/models/ViewModel/InviteViewModel';
import { UserViewModel } from 'src/app/models/ViewModel/UserViewModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-manage-users',
  templateUrl: './admin-manage-users.component.html',
  styleUrls: ['./admin-manage-users.component.css']
})
export class AdminManageUsersComponent implements OnInit {
  addNewUser = false;
  users:UserViewModel[] = []
  UserForm = new FormGroup({
    UserEmail: new FormControl('', Validators.required),
  });
  inviteViewModel:InviteViewModel = new InviteViewModel();
  constructor(private router:Router,private userService:UserService,) {
    
    
  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((res)=>{
      this.users = res;
    },(error)=>{

    })
  }

  activateForm(){
    this.addNewUser = true;
    
  }
  
  back(){
    this.router.navigate(['admin-panel'])
  }
  
  invite(){
    this.addNewUser = false;

    if(!this.UserForm.valid) return;

    this.inviteViewModel.email = this.UserForm.controls['UserEmail'].value || '';
    this.userService.inviteUser(this.inviteViewModel).subscribe((response)=>{

    },(error)=>{

    })
  }
  
  delete(id:number){
    this.userService.deleteUser(id).subscribe((response)=>{
      alert('The user was deleted')
      this.getUsers();
    },(error)=>{

    })
  }
  
}
