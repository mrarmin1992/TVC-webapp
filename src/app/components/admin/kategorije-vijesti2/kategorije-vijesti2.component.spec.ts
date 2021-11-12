import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijeVijesti2Component } from './kategorije-vijesti2.component';

describe('KategorijeVijesti2Component', () => {
  let component: KategorijeVijesti2Component;
  let fixture: ComponentFixture<KategorijeVijesti2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijeVijesti2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijeVijesti2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
