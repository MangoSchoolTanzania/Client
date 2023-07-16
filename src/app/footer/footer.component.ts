import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear:string = '';
  faCoffee = faCoffee;
  ngOnInit(): void {
    this.currentYear = new Date().getFullYear().toString();
  }

  visitSocialMedia(media:number){
    media === 1 ? window.open('https://instagram.com/mango_school?igshid=MzNlNGNkZWQ4Mg==') : window.open('https://www.facebook.com/MangoEnglishMediumSchool?mibextid=ZbWKwL');
  }

}
