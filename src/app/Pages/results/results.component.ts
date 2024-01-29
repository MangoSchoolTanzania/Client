import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResultModelView } from 'src/app/models/modelViews/ResultModelView';
import { AlertService } from 'src/app/services/alert.service';
import { results } from 'src/app/services/results.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  currentPage = 0;
  resultArray: ResultModelView[] = [];
  result: ResultModelView = new ResultModelView();
  options:any = [];

  filterSelectedValue = 'All';
  stringParam = 'All'

  constructor(private results: results,private alert:AlertService) {

  }

  ngOnInit(): void {
    this.getGrade();
    this.setFormOptions();
  }

  setFormOptions(){
    this.options = [{ name:'All'}, {name: 'Class' }, { name: 'Year' }, { name: 'Student' }]
  }

  getGrade() {
    this.alert.loading(true);
    this.results.getGrade(this.currentPage,this.filterSelectedValue,this.stringParam).subscribe((response) => {
      this.resultArray = response;
      this.alert.loading(false);
    }, (error) => {
      this.alert.loading(false);
      this.alert.errorMessage('Something went wrong, try again later')
    }, () => {

    })
  }

  FilterChange(event: Event) {
    this.filterSelectedValue = (event.target as HTMLSelectElement).value;
  }

  filter(){
    this.currentPage = 0;
    this.stringParam == "" ? this.stringParam = "All" : this.stringParam;
    this.getGrade();  
  }

  ChangePage(action: string) {
    if (action === '+') {
      this.currentPage++;
    }

    if (action === '-') {
      this.currentPage--;
    }

    if (this.currentPage < 0) {
      this.currentPage = 0;
    }

    this.getGrade();
  }
}
