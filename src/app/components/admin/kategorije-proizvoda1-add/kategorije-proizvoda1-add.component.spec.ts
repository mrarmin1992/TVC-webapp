import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijeProizvoda1AddComponent } from './kategorije-proizvoda1-add.component';

describe('KategorijeProizvoda1AddComponent', () => {
  let component: KategorijeProizvoda1AddComponent;
  let fixture: ComponentFixture<KategorijeProizvoda1AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijeProizvoda1AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijeProizvoda1AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
