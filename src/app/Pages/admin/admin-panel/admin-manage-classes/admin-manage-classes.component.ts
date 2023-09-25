import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassViewModel } from 'src/app/ViewModel/ClassViewModel';
import { ClassModelView } from 'src/app/modelViews/ClassModelView';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-admin-manage-classes',
  templateUrl: './admin-manage-classes.component.html',
  styleUrls: ['./admin-manage-classes.component.css']
})
export class AdminManageClassesComponent implements OnInit {
  classes:ClassModelView[] = [];
  addNewClass = false;
  page = 0;
  addClassForm = new FormGroup({
    className: new FormControl('', Validators.required),
    classYear: new FormControl('', Validators.required),
    classMonth: new FormControl('', Validators.required),
  });
  constructor(private classService: ClassService) {

  }
  ngOnInit(): void {
    this.getClasses();
  }

  getClasses(){
    this.classService.getClass(this.page).subscribe((response)=>{
      debugger;
      this.classes = response;
    },(error)=>{

    },()=>{

    })
  }

  addClass() { this.addNewClass = !this.addNewClass; }
  add() {
    if (!this.addClassForm.valid) { return; }

    const { className, classYear, classMonth } = this.addClassForm.value;

    const classViewModel: ClassViewModel = {
      id: 0,
      isActive: true,
      month: classMonth || '',
      name: className || '',
      year: classYear || ''
    };

    this.classService.addClass(classViewModel).subscribe((response) => {
      this.addClassForm.reset();
      this.addNewClass = false;

    }, (error) => {

    }, () => {

    })


  }

}
