import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proizvodi2AddComponent } from './proizvodi2-add.component';

describe('Proizvodi2AddComponent', () => {
  let component: Proizvodi2AddComponent;
  let fixture: ComponentFixture<Proizvodi2AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proizvodi2AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proizvodi2AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
