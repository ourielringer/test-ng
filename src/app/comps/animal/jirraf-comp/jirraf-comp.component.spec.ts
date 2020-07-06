import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JirrafCompComponent } from './jirraf-comp.component';

describe('JirrafCompComponent', () => {
  let component: JirrafCompComponent;
  let fixture: ComponentFixture<JirrafCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JirrafCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JirrafCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
