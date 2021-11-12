import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SveVijesti2Component } from './sve-vijesti2.component';

describe('SveVijesti2Component', () => {
  let component: SveVijesti2Component;
  let fixture: ComponentFixture<SveVijesti2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SveVijesti2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SveVijesti2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
