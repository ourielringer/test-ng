import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntuterComponent } from './intuter.component';

describe('IntuterComponent', () => {
  let component: IntuterComponent;
  let fixture: ComponentFixture<IntuterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntuterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
