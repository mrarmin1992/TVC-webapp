import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vijest1Component } from './vijest1.component';

describe('Vijest1Component', () => {
  let component: Vijest1Component;
  let fixture: ComponentFixture<Vijest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vijest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vijest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
