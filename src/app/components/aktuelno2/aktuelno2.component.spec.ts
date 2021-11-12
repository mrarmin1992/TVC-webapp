import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aktuelno2Component } from './aktuelno2.component';

describe('Aktuelno2Component', () => {
  let component: Aktuelno2Component;
  let fixture: ComponentFixture<Aktuelno2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aktuelno2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aktuelno2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
