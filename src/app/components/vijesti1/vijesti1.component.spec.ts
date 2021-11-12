import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vijesti1Component } from './vijesti1.component';

describe('Vijesti1Component', () => {
  let component: Vijesti1Component;
  let fixture: ComponentFixture<Vijesti1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vijesti1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vijesti1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
