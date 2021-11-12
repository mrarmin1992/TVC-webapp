import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponents1Component } from './home-components1.component';

describe('HomeComponents1Component', () => {
  let component: HomeComponents1Component;
  let fixture: ComponentFixture<HomeComponents1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponents1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponents1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
