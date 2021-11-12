import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijeVijesti1Component } from './kategorije-vijesti1.component';

describe('KategorijeVijesti1Component', () => {
  let component: KategorijeVijesti1Component;
  let fixture: ComponentFixture<KategorijeVijesti1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijeVijesti1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijeVijesti1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
