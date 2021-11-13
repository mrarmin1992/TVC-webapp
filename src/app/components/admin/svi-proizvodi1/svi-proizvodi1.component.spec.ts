import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SviProizvodi1Component } from './svi-proizvodi1.component';

describe('SviProizvodi1Component', () => {
  let component: SviProizvodi1Component;
  let fixture: ComponentFixture<SviProizvodi1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SviProizvodi1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SviProizvodi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
