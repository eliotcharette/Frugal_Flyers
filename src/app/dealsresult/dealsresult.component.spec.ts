import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsresultComponent } from './dealsresult.component';

describe('DealsresultComponent', () => {
  let component: DealsresultComponent;
  let fixture: ComponentFixture<DealsresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealsresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
