import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proizvodi2IzmjenaComponent } from './proizvodi2-izmjena.component';

describe('Proizvodi2IzmjenaComponent', () => {
  let component: Proizvodi2IzmjenaComponent;
  let fixture: ComponentFixture<Proizvodi2IzmjenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proizvodi2IzmjenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proizvodi2IzmjenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
