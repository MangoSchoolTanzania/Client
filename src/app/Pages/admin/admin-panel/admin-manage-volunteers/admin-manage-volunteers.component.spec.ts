import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageVolunteersComponent } from './admin-manage-volunteers.component';

describe('AdminManageVolunteersComponent', () => {
  let component: AdminManageVolunteersComponent;
  let fixture: ComponentFixture<AdminManageVolunteersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminManageVolunteersComponent]
    });
    fixture = TestBed.createComponent(AdminManageVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
