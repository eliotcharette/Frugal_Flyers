import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewzealandComponent } from './newzealand.component';

describe('NewzealandComponent', () => {
  let component: NewzealandComponent;
  let fixture: ComponentFixture<NewzealandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewzealandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewzealandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
