import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassViewModel } from 'src/app/models/ViewModel/ClassViewModel';
import { ClassModelView } from 'src/app/models/modelViews/ClassModelView';
import { AlertService } from 'src/app/services/alert.service';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-admin-manage-classes',
  templateUrl: './admin-manage-classes.component.html',
  styleUrls: ['./admin-manage-classes.component.css']
})
export class AdminManageClassesComponent implements OnInit {
  classes: ClassModelView[] = [];
  addNewClass = false;
  page = 0;
  addUpdateText = 'Add'
  idToUpdate:number = 0;
  addClassForm = new FormGroup({
    className: new FormControl('', Validators.required),
    classYear: new FormControl('', Validators.required),
    classMonth: new FormControl('', Validators.required),
  });
  constructor(private classService: ClassService,
    private router:Router,
    private alert:AlertService) {

  }
  ngOnInit(): void {
    this.getClasses();
  }

  getClasses() {
    this.classService.getClass(this.page).subscribe((response) => {
      this.classes = response;
    }, (error) => {

    }, () => {

    })
  }

  addClass() { this.addNewClass = !this.addNewClass; }
  addUpdate() {
    debugger;
    if (this.addUpdateText === 'Add') {
      this.add();
    }else{
      this.update(this.idToUpdate);
    }
  }

  back(){
    this.router.navigate(['admin-panel'])
  }

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
      this.alert.successMessage('The class was successfuly added')
      this.getClasses();
    }, (error) => {
      this.alert.successMessage('Something went wrong, try again later')
    }, () => {

    })
  }
  update(id:number) {
    const { className, classYear, classMonth } = this.addClassForm.value;

    const classViewModel: ClassViewModel = {
      id: id,
      isActive: true,
      month: classMonth || '',
      name: className || '',
      year: classYear || ''
    };
    this.classService.updateClass(classViewModel).subscribe((response) => {
      this.addUpdateText = 'Add';
      this.addClassForm.reset();
      this.addNewClass = false;
      this.alert.successMessage('The class was successfuly updated')
      this.getClasses();
    }, (error) => {
      this.alert.successMessage('Something went wrong, try again later')
    }, () => {

    })
  }

  updateLabel(id: number) {
    this.addUpdateText = 'Update'
    this.addNewClass = true;
    let updateClass = this.classes.find(x => x.id == id);
    if (!updateClass) return;

    this.addClassForm.setValue({
      className: updateClass.name,
      classYear: updateClass.year,
      classMonth: updateClass.month,
    });
    this.idToUpdate = id
  }
  delete(id: number) {
    this.classService.deleteClass(id).subscribe((response) => {
      this.addClassForm.reset();
      this.addNewClass = false;
      this.alert.successMessage('The class was successfuly deleted')
      this.getClasses();

    }, (error) => {
      this.alert.successMessage('Something went wrong, try again later')
    }, () => {

    })
  }

  showResults(classId: number) {
    this.router.navigate(['admin-manage-results'], { queryParams: { classId: classId } });
  }

}
