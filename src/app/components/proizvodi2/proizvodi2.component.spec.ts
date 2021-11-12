import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proizvodi2Component } from './proizvodi2.component';

describe('Proizvodi2Component', () => {
  let component: Proizvodi2Component;
  let fixture: ComponentFixture<Proizvodi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proizvodi2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proizvodi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
