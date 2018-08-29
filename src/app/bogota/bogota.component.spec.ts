import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BogotaComponent } from './bogota.component';

describe('BogotaComponent', () => {
  let component: BogotaComponent;
  let fixture: ComponentFixture<BogotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BogotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BogotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
