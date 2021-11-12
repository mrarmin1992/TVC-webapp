import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijeProizvoda1Component } from './kategorije-proizvoda1.component';

describe('KategorijeProizvoda1Component', () => {
  let component: KategorijeProizvoda1Component;
  let fixture: ComponentFixture<KategorijeProizvoda1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijeProizvoda1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijeProizvoda1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
