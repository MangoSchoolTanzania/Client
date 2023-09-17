import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageMessagesComponent } from './admin-manage-messages.component';

describe('AdminManageMessagesComponent', () => {
  let component: AdminManageMessagesComponent;
  let fixture: ComponentFixture<AdminManageMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminManageMessagesComponent]
    });
    fixture = TestBed.createComponent(AdminManageMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
