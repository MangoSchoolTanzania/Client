import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {

  constructor(private router: Router) {

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
  }
}
