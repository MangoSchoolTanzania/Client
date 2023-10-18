import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ResultViewModel } from 'src/app/ViewModel/ResultViewModel';
import { ResultModelView } from 'src/app/modelViews/ResultModelView';
import { results } from 'src/app/services/results.service';

@Component({
  selector: 'app-add-update-result',
  templateUrl: './add-update-result.component.html',
  styleUrls: ['./add-update-result.component.css']
})
export class AddUpdateResultComponent implements OnInit {
  isUpdateContext:boolean = false;
  classId:number = 0;
  resultModel:ResultModelView = new ResultModelView();
  resultViewModel: ResultViewModel = new ResultViewModel();
  resultForm = new FormGroup({
    id: new FormControl('',Validators.required),
    isActive: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    arith: new FormControl('',Validators.required),
    kus: new FormControl('',Validators.required),
    he: new FormControl('',Validators.required),
    sa: new FormControl('',Validators.required),
    writ: new FormControl('',Validators.required),
    read: new FormControl('',Validators.required),
    total: new FormControl('',Validators.required),
    ave: new FormControl('',Validators.required),
    pos: new FormControl('',Validators.required),
    className: new FormControl('',Validators.required),
    classYear: new FormControl('',Validators.required),
    classMonth: new FormControl('',Validators.required),
    classId: new FormControl('',Validators.required),
  });
  constructor(private ActivatedRoute: ActivatedRoute,private resultService:results,private route:Router) {
    
  }
  ngOnInit(): void {
    this.classId = Number(this.ActivatedRoute.snapshot.queryParamMap.get('classId'));

    const paramsId = this.ActivatedRoute.snapshot.queryParamMap.get('id');
    if(paramsId){
      this.isUpdateContext = true;
      this.getResultFromRoute();
    }
  }

    getResultFromRoute() {
      
    const id = this.ActivatedRoute.snapshot.queryParamMap.get('id');
    const isActive = this.ActivatedRoute.snapshot.queryParamMap.get('isActive');
    const name = this.ActivatedRoute.snapshot.queryParamMap.get('name');
    const arith = this.ActivatedRoute.snapshot.queryParamMap.get('arith');
    const kus = this.ActivatedRoute.snapshot.queryParamMap.get('kus');
    const he = this.ActivatedRoute.snapshot.queryParamMap.get('he');
    const sa = this.ActivatedRoute.snapshot.queryParamMap.get('sa');
    const writ = this.ActivatedRoute.snapshot.queryParamMap.get('writ');
    const read = this.ActivatedRoute.snapshot.queryParamMap.get('read');
    const total = this.ActivatedRoute.snapshot.queryParamMap.get('total');
    const ave = this.ActivatedRoute.snapshot.queryParamMap.get('ave');
    const pos = this.ActivatedRoute.snapshot.queryParamMap.get('pos');
    const className = this.ActivatedRoute.snapshot.queryParamMap.get('className');
    const classYear = this.ActivatedRoute.snapshot.queryParamMap.get('classYear');
    const classMonth = this.ActivatedRoute.snapshot.queryParamMap.get('classMonth');
    const classId = this.ActivatedRoute.snapshot.queryParamMap.get('classId');
  
    // Set the values in your form
    this.resultForm.setValue({
      id,
      isActive,
      name,
      arith,
      kus,
      he,
      sa,
      writ,
      read,
      total,
      ave,
      pos,
      className,
      classYear,
      classMonth,
      classId
    });
  }
  send(){
    debugger;
    if(this.isUpdateContext){
      this.update();
    }

    if(!this.isUpdateContext){
      this.add();
    }
  }

  update(){
    if(!this.resultForm.valid){return;}
    this.resultViewModel = {
      Id: this.resultForm.controls['id'].value ? Number(this.resultForm.controls['id'].value) : 0,
      Name: this.resultForm.controls['name'].value ? this.resultForm.controls['name'].value : '',
      Arith: this.resultForm.controls['arith'].value ? Number(this.resultForm.controls['arith'].value) : 0,
      Kus: this.resultForm.controls['kus'].value ? Number(this.resultForm.controls['kus'].value) : 0,
      HE: this.resultForm.controls['he'].value ? Number(this.resultForm.controls['he'].value) : 0,
      SA: this.resultForm.controls['sa'].value ? Number(this.resultForm.controls['sa'].value) : 0,
      Writ: this.resultForm.controls['writ'].value ? Number(this.resultForm.controls['writ'].value) : 0,
      Read: this.resultForm.controls['read'].value ? Number(this.resultForm.controls['read'].value) : 0,
      Total: this.resultForm.controls['total'].value ? Number(this.resultForm.controls['total'].value) : 0,
      Ave: this.resultForm.controls['ave'].value ? Number(this.resultForm.controls['ave'].value) : 0,
      Pos: this.resultForm.controls['pos'].value ? Number(this.resultForm.controls['pos'].value) : 0,
      ClassId: this.resultForm.controls['classId'].value ? Number(this.resultForm.controls['classId'].value) : this.classId
    };

    this.resultService.updateResult(this.resultViewModel).subscribe((response)=>{
      this.route.navigate(['admin-manage-results'])
    },(error)=>{

    },()=>{

    })
  }
  add(){
    this.resultViewModel = {
      Id: this.resultForm.controls['id'].value ? Number(this.resultForm.controls['id'].value) : 0,
      Name: this.resultForm.controls['name'].value ? this.resultForm.controls['name'].value : '',
      Arith: this.resultForm.controls['arith'].value ? Number(this.resultForm.controls['arith'].value) : 0,
      Kus: this.resultForm.controls['kus'].value ? Number(this.resultForm.controls['kus'].value) : 0,
      HE: this.resultForm.controls['he'].value ? Number(this.resultForm.controls['he'].value) : 0,
      SA: this.resultForm.controls['sa'].value ? Number(this.resultForm.controls['sa'].value) : 0,
      Writ: this.resultForm.controls['writ'].value ? Number(this.resultForm.controls['writ'].value) : 0,
      Read: this.resultForm.controls['read'].value ? Number(this.resultForm.controls['read'].value) : 0,
      Total: this.resultForm.controls['total'].value ? Number(this.resultForm.controls['total'].value) : 0,
      Ave: this.resultForm.controls['ave'].value ? Number(this.resultForm.controls['ave'].value) : 0,
      Pos: this.resultForm.controls['pos'].value ? Number(this.resultForm.controls['pos'].value) : 0,
      ClassId:this.classId
    };
    this.resultService.addResult(this.resultViewModel).subscribe((response)=>{
      this.route.navigate(['admin-manage-results'], { queryParams: { classId: this.classId } });
    },(error)=>{

    },()=>{

    })
  }
}
