import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartagenaComponent } from './cartagena.component';

describe('CartagenaComponent', () => {
  let component: CartagenaComponent;
  let fixture: ComponentFixture<CartagenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartagenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartagenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
