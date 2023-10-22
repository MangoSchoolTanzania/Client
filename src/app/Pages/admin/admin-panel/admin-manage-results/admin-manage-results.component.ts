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
  classId:number = 0
  constructor(private results: results,private router:Router,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.classId = Number(this.route.snapshot.queryParamMap.get('classId'));
    this.getResultsByClass(this.classId);
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


  UpdateResult(result:any){
    this.router.navigate(['add-update-result'], {
      queryParams: {
        id: result.id,
        isActive: result.isActive,
        name: result.name,
        arith: result.arith,
        kus: result.kus,
        he: result.he,
        sa: result.sa,
        writ: result.writ,
        read: result.read,
        total: result.total,
        ave: result.ave,
        pos: result.pos,
        className: result.className,
        classYear: result.classYear,
        classMonth: result.classMonth,
        classId:this.classId
      }
    });
  }

  AddResult(){
    this.router.navigate(['add-update-result'], { queryParams: { classId: this.classId } });
  }

  DeleteResult(resultId:number){
    this.results.deleteResult(resultId).subscribe((response)=>{
      this.getResultsByClass(this.classId);
    },(error)=>{

    },()=>{

    })
  }
}
