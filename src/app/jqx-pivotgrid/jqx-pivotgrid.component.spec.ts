import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqxPivotgridComponent } from './jqx-pivotgrid.component';

describe('JqxPivotgridComponent', () => {
  let component: JqxPivotgridComponent;
  let fixture: ComponentFixture<JqxPivotgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqxPivotgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqxPivotgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
