import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTestsComponent } from './basic-tests.component';

describe('BasicTestsComponent', () => {
  let component: BasicTestsComponent;
  let fixture: ComponentFixture<BasicTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
