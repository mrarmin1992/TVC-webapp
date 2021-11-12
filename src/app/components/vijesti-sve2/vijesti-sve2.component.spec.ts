import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VijestiSve2Component } from './vijesti-sve2.component';

describe('VijestiSve2Component', () => {
  let component: VijestiSve2Component;
  let fixture: ComponentFixture<VijestiSve2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VijestiSve2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VijestiSve2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
