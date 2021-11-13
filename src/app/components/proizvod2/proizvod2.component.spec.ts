import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proizvod2Component } from './proizvod2.component';

describe('Proizvod2Component', () => {
  let component: Proizvod2Component;
  let fixture: ComponentFixture<Proizvod2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proizvod2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proizvod2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
