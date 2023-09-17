import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateResultComponent } from './add-update-result.component';

describe('AddUpdateResultComponent', () => {
  let component: AddUpdateResultComponent;
  let fixture: ComponentFixture<AddUpdateResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdateResultComponent]
    });
    fixture = TestBed.createComponent(AddUpdateResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
