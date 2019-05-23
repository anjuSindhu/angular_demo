import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqxBarguageComponent } from './jqx-barguage.component';

describe('JqxBarguageComponent', () => {
  let component: JqxBarguageComponent;
  let fixture: ComponentFixture<JqxBarguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqxBarguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqxBarguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
