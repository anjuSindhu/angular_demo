import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesTestsComponent } from './pipes-tests.component';

describe('PipesTestsComponent', () => {
  let component: PipesTestsComponent;
  let fixture: ComponentFixture<PipesTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
