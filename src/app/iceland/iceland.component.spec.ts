import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcelandComponent } from './iceland.component';

describe('IcelandComponent', () => {
  let component: IcelandComponent;
  let fixture: ComponentFixture<IcelandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcelandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcelandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
