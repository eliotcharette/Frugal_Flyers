import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedellinComponent } from './medellin.component';

describe('MedellinComponent', () => {
  let component: MedellinComponent;
  let fixture: ComponentFixture<MedellinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedellinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedellinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
