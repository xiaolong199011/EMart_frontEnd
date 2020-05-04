import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogininComponent } from './loginin.component';

describe('LogininComponent', () => {
  let component: LogininComponent;
  let fixture: ComponentFixture<LogininComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogininComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogininComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
