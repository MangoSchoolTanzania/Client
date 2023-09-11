import { Component, OnInit } from '@angular/core';
import { results } from '../services/results.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private results:results) {
    
  }
  ngOnInit(): void {
    this.getGrade();
  }

  getGrade(){
    this.results.getGrade().subscribe((response)=>{
      debugger;
    },(error)=>{
      console.error('Error:', error);
    },()=>{

    })
  }
}
