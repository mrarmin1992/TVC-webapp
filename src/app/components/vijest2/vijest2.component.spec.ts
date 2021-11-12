import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vijest2Component } from './vijest2.component';

describe('Vijest2Component', () => {
  let component: Vijest2Component;
  let fixture: ComponentFixture<Vijest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vijest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vijest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
