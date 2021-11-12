import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijeProizvoda2IzmjenaComponent } from './kategorije-proizvoda2-izmjena.component';

describe('KategorijeProizvoda2IzmjenaComponent', () => {
  let component: KategorijeProizvoda2IzmjenaComponent;
  let fixture: ComponentFixture<KategorijeProizvoda2IzmjenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijeProizvoda2IzmjenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijeProizvoda2IzmjenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
