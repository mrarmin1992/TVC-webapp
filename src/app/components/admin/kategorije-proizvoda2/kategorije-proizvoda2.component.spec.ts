import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijeProizvoda2Component } from './kategorije-proizvoda2.component';

describe('KategorijeProizvoda2Component', () => {
  let component: KategorijeProizvoda2Component;
  let fixture: ComponentFixture<KategorijeProizvoda2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijeProizvoda2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijeProizvoda2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
