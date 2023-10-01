import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultModelView } from 'src/app/modelViews/ResultModelView';
import { results } from 'src/app/services/results.service';

@Component({
  selector: 'app-admin-manage-results',
  templateUrl: './admin-manage-results.component.html',
  styleUrls: ['./admin-manage-results.component.css']
})
export class AdminManageResultsComponent implements OnInit{
  currentPage = 0;
  resultArray: ResultModelView[] = [];
  result: ResultModelView = new ResultModelView();
  options:any = [];

  filterSelectedValue = 'All';
  stringParam = 'All'

  constructor(private results: results,private router:Router,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const classId = Number(this.route.snapshot.queryParamMap.get('classId'));
    this.getResultsByClass(classId);
    this.setFormOptions();
  }

  setFormOptions(){
    this.options = [{ name:'All'}, {name: 'Class' }, { name: 'Year' }, { name: 'Student' }]
  }

  getResultsByClass(classId:number){
    this.results.getResultByClass(classId).subscribe((response) => {
      this.resultArray = response;
    }, (error) => {
      console.error('Error:', error);
    }, () => {

    })
  }

  FilterChange(event: Event) {
    this.filterSelectedValue = (event.target as HTMLSelectElement).value;
  }


  AddUpdateResult(){
    this.router.navigate(['add-update-result'])
  }
}
