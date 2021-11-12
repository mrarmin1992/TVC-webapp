import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijeVijesti2AddComponent } from './kategorije-vijesti2-add.component';

describe('KategorijeVijesti2AddComponent', () => {
  let component: KategorijeVijesti2AddComponent;
  let fixture: ComponentFixture<KategorijeVijesti2AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijeVijesti2AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijeVijesti2AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
