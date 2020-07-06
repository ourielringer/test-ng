import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcDoubleComponent } from './calc-double.component';

describe('CalcDoubleComponent', () => {
  let component: CalcDoubleComponent;
  let fixture: ComponentFixture<CalcDoubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcDoubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
