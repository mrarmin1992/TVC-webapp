import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SviProizvodi2Component } from './svi-proizvodi2.component';

describe('SviProizvodi2Component', () => {
  let component: SviProizvodi2Component;
  let fixture: ComponentFixture<SviProizvodi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SviProizvodi2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SviProizvodi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
