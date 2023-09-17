import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageResultsComponent } from './admin-manage-results.component';

describe('AdminManageResultsComponent', () => {
  let component: AdminManageResultsComponent;
  let fixture: ComponentFixture<AdminManageResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminManageResultsComponent]
    });
    fixture = TestBed.createComponent(AdminManageResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
