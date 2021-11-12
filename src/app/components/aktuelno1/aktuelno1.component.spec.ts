import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aktuelno1Component } from './aktuelno1.component';

describe('Aktuelno1Component', () => {
  let component: Aktuelno1Component;
  let fixture: ComponentFixture<Aktuelno1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aktuelno1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aktuelno1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
