import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijeVijesti1AddComponent } from './kategorije-vijesti1-add.component';

describe('KategorijeVijesti1AddComponent', () => {
  let component: KategorijeVijesti1AddComponent;
  let fixture: ComponentFixture<KategorijeVijesti1AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijeVijesti1AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijeVijesti1AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
