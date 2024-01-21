import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {

  constructor(private router: Router,private tokenService:TokenService) {

  }

  send(action: string) {
    if(action == 'manage-classes'){
      this.router.navigate(['admin-manage-classes']);
    }
    if(action == 'manage-users'){
      this.router.navigate(['admin-manage-users']);
    }
    if(action == 'manage-messages'){
      this.router.navigate(['admin-manage-messages']);
    }
    if(action == 'manage-volunteers'){
      this.router.navigate(['admin-manage-volunteers']);
    }
    if(action == 'logout'){
      this.tokenService.clearToken();
      this.router.navigate(['admin']);
    }
  }
}
