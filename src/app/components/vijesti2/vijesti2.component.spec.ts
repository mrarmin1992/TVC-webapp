import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vijesti2Component } from './vijesti2.component';

describe('Vijesti2Component', () => {
  let component: Vijesti2Component;
  let fixture: ComponentFixture<Vijesti2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vijesti2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vijesti2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
