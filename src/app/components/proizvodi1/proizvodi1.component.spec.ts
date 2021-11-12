import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proizvodi1Component } from './proizvodi1.component';

describe('Proizvodi1Component', () => {
  let component: Proizvodi1Component;
  let fixture: ComponentFixture<Proizvodi1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proizvodi1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proizvodi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
