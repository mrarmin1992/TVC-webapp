import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proizvod1Component } from './proizvod1.component';

describe('Proizvod1Component', () => {
  let component: Proizvod1Component;
  let fixture: ComponentFixture<Proizvod1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proizvod1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proizvod1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
