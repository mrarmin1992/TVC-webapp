import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijeProizvoda2AddComponent } from './kategorije-proizvoda2-add.component';

describe('KategorijeProizvoda2AddComponent', () => {
  let component: KategorijeProizvoda2AddComponent;
  let fixture: ComponentFixture<KategorijeProizvoda2AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijeProizvoda2AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijeProizvoda2AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
