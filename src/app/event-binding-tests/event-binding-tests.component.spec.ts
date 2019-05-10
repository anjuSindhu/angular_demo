import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingTestsComponent } from './event-binding-tests.component';

describe('EventBindingTestsComponent', () => {
  let component: EventBindingTestsComponent;
  let fixture: ComponentFixture<EventBindingTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBindingTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
