import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponents2Component } from './home-components2.component';

describe('HomeComponents2Component', () => {
  let component: HomeComponents2Component;
  let fixture: ComponentFixture<HomeComponents2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponents2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponents2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
