import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodiSve2Component } from './proizvodi-sve2.component';

describe('ProizvodiSve2Component', () => {
  let component: ProizvodiSve2Component;
  let fixture: ComponentFixture<ProizvodiSve2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProizvodiSve2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProizvodiSve2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
