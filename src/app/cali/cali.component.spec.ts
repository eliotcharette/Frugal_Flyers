import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaliComponent } from './cali.component';

describe('CaliComponent', () => {
  let component: CaliComponent;
  let fixture: ComponentFixture<CaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
