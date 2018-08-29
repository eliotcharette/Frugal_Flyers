import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarribComponent } from './carrib.component';

describe('CarribComponent', () => {
  let component: CarribComponent;
  let fixture: ComponentFixture<CarribComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarribComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
