import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBuyerInfoComponent } from './admin-buyer-info.component';

describe('AdminBuyerInfoComponent', () => {
  let component: AdminBuyerInfoComponent;
  let fixture: ComponentFixture<AdminBuyerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBuyerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuyerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
