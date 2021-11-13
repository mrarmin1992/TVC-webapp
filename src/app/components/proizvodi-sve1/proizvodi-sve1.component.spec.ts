import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodiSve1Component } from './proizvodi-sve1.component';

describe('ProizvodiSve1Component', () => {
  let component: ProizvodiSve1Component;
  let fixture: ComponentFixture<ProizvodiSve1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProizvodiSve1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProizvodiSve1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
