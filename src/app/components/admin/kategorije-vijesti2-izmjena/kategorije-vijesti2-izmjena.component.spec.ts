import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijeVijesti2IzmjenaComponent } from './kategorije-vijesti2-izmjena.component';

describe('KategorijeVijesti2IzmjenaComponent', () => {
  let component: KategorijeVijesti2IzmjenaComponent;
  let fixture: ComponentFixture<KategorijeVijesti2IzmjenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijeVijesti2IzmjenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijeVijesti2IzmjenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
