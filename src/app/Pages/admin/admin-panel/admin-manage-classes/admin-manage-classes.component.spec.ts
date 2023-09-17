import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageClassesComponent } from './admin-manage-classes.component';

describe('AdminManageClassesComponent', () => {
  let component: AdminManageClassesComponent;
  let fixture: ComponentFixture<AdminManageClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminManageClassesComponent]
    });
    fixture = TestBed.createComponent(AdminManageClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
