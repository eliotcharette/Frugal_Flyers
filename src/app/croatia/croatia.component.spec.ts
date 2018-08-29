import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroatiaComponent } from './croatia.component';

describe('CroatiaComponent', () => {
  let component: CroatiaComponent;
  let fixture: ComponentFixture<CroatiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroatiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroatiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
