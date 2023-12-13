import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router,private loginService:LoginService) {
    
  }
  ngOnInit(): void {
    
  }

  verifyUserSituation(){
    this.loginService.verify().subscribe((result)=>{
      this.router.navigate(['admin-panel'])
    },(error)=>{
      console.clear();
      this.router.navigate(['/admin']);
    })
  }  
  
}
