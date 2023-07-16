import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  currentCard = 1;
  ngOnInit(): void {

  }

  CurrentCard(signal:string){
    signal === '+' ? this.currentCard ++ : this.currentCard -- ;
  }

}
