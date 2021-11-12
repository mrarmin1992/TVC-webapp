import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VijestiSve1Component } from './vijesti-sve1.component';

describe('VijestiSve1Component', () => {
  let component: VijestiSve1Component;
  let fixture: ComponentFixture<VijestiSve1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VijestiSve1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VijestiSve1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
