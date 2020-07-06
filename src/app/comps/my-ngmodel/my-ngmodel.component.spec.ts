import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNgmodelComponent } from './my-ngmodel.component';

describe('MyNgmodelComponent', () => {
  let component: MyNgmodelComponent;
  let fixture: ComponentFixture<MyNgmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNgmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
