import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijeProizvoda1IzmjenaComponent } from './kategorije-proizvoda1-izmjena.component';

describe('KategorijeProizvoda1IzmjenaComponent', () => {
  let component: KategorijeProizvoda1IzmjenaComponent;
  let fixture: ComponentFixture<KategorijeProizvoda1IzmjenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijeProizvoda1IzmjenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijeProizvoda1IzmjenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
