import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijeVijesti1IzmjenaComponent } from './kategorije-vijesti1-izmjena.component';

describe('KategorijeVijesti1IzmjenaComponent', () => {
  let component: KategorijeVijesti1IzmjenaComponent;
  let fixture: ComponentFixture<KategorijeVijesti1IzmjenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijeVijesti1IzmjenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijeVijesti1IzmjenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
