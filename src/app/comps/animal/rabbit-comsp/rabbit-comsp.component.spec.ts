import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbitComspComponent } from './rabbit-comsp.component';

describe('RabbitComspComponent', () => {
  let component: RabbitComspComponent;
  let fixture: ComponentFixture<RabbitComspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RabbitComspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RabbitComspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
