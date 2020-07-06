import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TigerCompComponent } from './tiger-comp.component';

describe('TigerCompComponent', () => {
  let component: TigerCompComponent;
  let fixture: ComponentFixture<TigerCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TigerCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TigerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
