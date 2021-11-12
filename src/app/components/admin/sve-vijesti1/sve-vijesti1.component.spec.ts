import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SveVijesti1Component } from './sve-vijesti1.component';

describe('SveVijesti1Component', () => {
  let component: SveVijesti1Component;
  let fixture: ComponentFixture<SveVijesti1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SveVijesti1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SveVijesti1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
